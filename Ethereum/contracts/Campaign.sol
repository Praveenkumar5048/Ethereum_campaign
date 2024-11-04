// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum, string memory projectName, string memory projectDescription, uint requiredFunds) public {
        address newCampaign = address(new Campaign(minimum, projectName, projectDescription, requiredFunds, msg.sender));
        deployedCampaigns.push(payable(newCampaign));
    }

    function getDeployedCampaigns() public view returns (address [] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    uint public requiredFunds;
    string public projectName;
    string public projectDescription;
    mapping(address => bool) public contributers;
    uint public contributersCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor (uint minimum, string memory _projectName, string memory _projectDescription, uint _requiredFunds, address creator)  {
        manager = creator;
        minimumContribution = minimum;
        projectName = _projectName;
        projectDescription = _projectDescription;
        requiredFunds = _requiredFunds;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        contributers[msg.sender] = true;
        contributersCount++;
    }

    function createRequest(string memory description, uint value, address recipient) public restricted {
        Request storage newRequest = requests.push();
        newRequest.description = description;
        newRequest.value = value;
        newRequest.recipient = recipient;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(contributers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (contributersCount / 2));
        require(!request.complete);

        payable(request.recipient).transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(uint, uint, uint, uint, address, uint, string memory, string memory) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            contributersCount,
            manager,
            requiredFunds,
            projectName,
            projectDescription
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
    
}