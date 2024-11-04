import React, {useState, useEffect} from 'react';
import { Card, Grid, Button, Container, Form, FormField } from "semantic-ui-react";
import { useRouter } from 'next/router';
import Campaign from '../../Ethereum/campaign';
import web3 from '../../Ethereum/web3';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Requests from '../../components/requests';

const CampaignShow = () => {

    const [items, setItems] = useState([]);
    const [contributeValue, setContributeValue] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { address } = router.query;

    useEffect(() => {
        const getSummary = async () => {
    
            try {

                if (!address) return;

                const campaign = Campaign(address);
                const summary = await campaign.methods.getSummary().call();
            
                const items = [
                    {
                        header: "Project Name",
                        description: summary[6]
                    },
                    {
                        header: "Project Description",
                        description: summary[7],
                        style: { overflowWrap: "break-word" },
                    },
                    {
                        header: "Required Funds",
                        meta: summary[5].toString() + " ethers",
                    },
                    {
                        header: summary[4],
                        meta: "Address of Manager",
                        description: "The manager created this campaign and can create requests to withdraw money",
                        style: { overflowWrap: "break-word" },
                    },
                    {
                        header: web3.utils.fromWei(summary[0].toString(), "ether"),
                        meta: "Minimum Contribution (ether)",
                        description: "You must contribute at least this much ether to become an contributer",
                    },
                    {
                        header: summary[2].toString(),
                        meta: "Number of Requests",
                        description: "A request tries to withdraw money from the contract. Requests must be approved by contributers",
                    },
                    {
                        header: summary[3].toString(),
                        meta: "Number of Contributers",
                        description: "Number of people who have donated to this campaign",
                    },
                    {
                        header: web3.utils.fromWei(summary[1].toString(), "ether"),
                        meta: "Campaign Balance (ether)",
                        description: "The balance is how much money this campaign has left to spend.",
                    },
                ];
                
                setItems(items);
            } catch (error) {
                console.error("Error fetching summary:", error);
            }
        };
        
        getSummary();
        
    }, [router.query]);

    const processContribution = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const accounts = await web3.eth.getAccounts();
            const campaign = Campaign(address);
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(contributeValue, "ether"),
            });
            
        } catch (err ) {
            console.log(err);
        }
        setContributeValue(0);
        setLoading(false);
    }

    return (
        <>
        <Navbar />
        <Container>
            <h3>Campaign Show</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column >
                        <Card.Group items={items} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Form onSubmit={processContribution} style = {{marginTop : 20}}>
                <FormField>
                <label>Become a Contributer !!</label>
                <input placeholder='Enter ether' value={contributeValue} required onChange={(e) => {setContributeValue(e.target.value)}}/>
                </FormField>
            
                <Button type='submit' secondary loading={loading}>Contibute !!</Button>
            </Form>
            <Requests address={router.query.address} />
        </Container>
        </>
    );
};

export default CampaignShow;
