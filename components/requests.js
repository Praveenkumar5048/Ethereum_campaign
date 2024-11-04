import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Table, Button } from 'semantic-ui-react';
import Campaign from '../Ethereum/campaign';
import web3 from '../Ethereum/web3';
import CreateRequest from './newRequest';

const Requests = ({ address }) => {
    const [requests, setRequests] = useState([]);
    const [requestCount, setRequestCount] = useState(0);
    const [approversCount, setApproversCount] = useState(0);
    const [createRequest, setCreateRequest] = useState(false);

    useEffect(() => {
        const getRequests = async () => {
            const campaign = Campaign(address);
            const requestCount = await campaign.methods.getRequestsCount().call();
            const contributersCount = await campaign.methods.contributersCount().call();
            
            // Convert requestCount to an integer
            setRequestCount(requestCount.toString());
            setApproversCount(contributersCount.toString());

            // Fetch each request using the count
            const requests = await Promise.all(
                Array(parseInt(requestCount))
                    .fill()
                    .map((_, index) => campaign.methods.requests(index).call())
            );

            setRequests(requests);
        };
        
        if (address) {
            getRequests();
        }
    }, [address]);

    const approveRequest = async (id) => {
        const campaign = Campaign(address);

        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(id).send({
        from: accounts[0],
        });
    }

    const finaliseRequest = async (id) => {
        const campaign = Campaign(address);

        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(id).send({
        from: accounts[0],
        });
    }

    return (
        <>
            <h3>Requests</h3>
            
            <Button primary onClick = {() => setCreateRequest((prev)=>(!prev))}>Add Request</Button>
            {createRequest && <CreateRequest address={address}/> }
            
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Amount (ether)</Table.HeaderCell>
                        <Table.HeaderCell>Recipient</Table.HeaderCell>
                        <Table.HeaderCell>Approval Count</Table.HeaderCell>
                        <Table.HeaderCell>Approve</Table.HeaderCell>
                        <Table.HeaderCell>Finalize</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {requests.map((request, index) => (
                        <Table.Row key={index} disabled={request.complete}>
                            <Table.Cell>{index+1}</Table.Cell>
                            <Table.Cell>{request.description}</Table.Cell>
                            <Table.Cell>{web3.utils.fromWei(request.value, "ether")}</Table.Cell>
                            <Table.Cell>{request.recipient}</Table.Cell>
                            <Table.Cell>
                                {request.approvalCount.toString()}/{approversCount}
                            </Table.Cell>
                            <Table.Cell >
                                <Button disabled={request.complete} color="green" basic onClick={() => approveRequest(index)}>
                                    Approve
                                </Button>
                            </Table.Cell>
                            <Table.Cell >
                                <Button disabled={request.complete} color="teal" basic onClick={() => finaliseRequest(index)}>
                                    Finalize
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <div>Found {requestCount} requests.</div>
        </>
    );
};

export default Requests;

