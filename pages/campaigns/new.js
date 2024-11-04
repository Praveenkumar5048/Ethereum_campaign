import React, {useState} from 'react';
import { Form, Button, Input, Message, Container } from "semantic-ui-react";
import factory from "../../Ethereum/factory.js";
import web3 from "../../Ethereum/web3.js";

const newCampaign = () => {
    
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [funds, setFunds] = useState("");
    const [minContribution, setMinContribution ] = useState("");

    const createCampaign = async (e) => {
        e.preventDefault();
        try {

            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(web3.utils.toWei(minContribution, "ether"), projectName, projectDescription, funds).send({
                from: accounts[0],
            });
      
          } catch (err) {
            console.log(err);
          }
    }
    
    return (
        
        <Container >
        <h3>Create Campaign</h3>
        <Form onSubmit = {createCampaign}>
          <Form.Field>
            <label>Project Name</label>
            <Input
               type="text"
               value = {projectName}
               onChange = {(e) => {setProjectName(e.target.value)}}
            />
          </Form.Field>
          <Form.Field>
            <label>Project Description</label>
            <Input
               type="text"
               value = {projectDescription}
               placeholder="Write a short note on your project"
               onChange = {(e) => {setProjectDescription(e.target.value)}}
            />
          </Form.Field>
          <Form.Field>
            <label>Required Funds</label>
            <Input
               type="text"
               value = {funds}
               placeholder="Enter value in Ether"
               onChange = {(e) => {setFunds(e.target.value)}}
            />
          </Form.Field>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
               type="text"
               value = {minContribution}
               placeholder="Enter value in Ether"
               onChange = {(e) => {setMinContribution(e.target.value)}}
            />
          </Form.Field>
          <Message error header="Oops!" />
          <Button loading={false} primary>
            Create!
          </Button>
        </Form>
        
        </Container>
    );
}

export default newCampaign;