import React, {useState, useEffect} from 'react';
import { Form, Button, Container, Input } from 'semantic-ui-react';
import Campaign from "../Ethereum/campaign";
import web3 from "../Ethereum/web3";

const newRequest = ({address}) => {

    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [recipient, setRecipient] = useState("");

    const createRequest = async () => {

        const campaign = Campaign(address);
        setLoading(true);
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
                .send({ from: accounts[0] });
        
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    }
    return (
        <Container>
            <h2>Create New Request !!</h2>
            <Form onSubmit={createRequest} >
            <Form.Field>
                <label>Description</label>
                <Input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Value in Ether</label>
                <Input
                value={value}
                onChange={(event) => setValue(event.target.value) }
                />
            </Form.Field>
            <Form.Field>
                <label>Recipient</label>
                <Input
                value={recipient}
                onChange={(event) => setRecipient(event.target.value ) }
                />
            </Form.Field>
            
            <Button primary loading={loading}>
                Create!
            </Button>
            </Form>
        </Container>
    );
}

export default newRequest;