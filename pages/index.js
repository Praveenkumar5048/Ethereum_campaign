import React, {useState, useEffect} from 'react';
import { Button, Container, CardGroup } from 'semantic-ui-react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import factory from '../Ethereum/factory.js' ;
import Link from 'next/link';

const Home = () => {
  
  const [items, setItems] = useState([]);

  useEffect ( () => {
      const getCampaigns = async () => {
        try {
          const campaigns = await factory.methods.getDeployedCampaigns().call();
          const itemsList = campaigns.map((address) => ({
              header: address,
              description: (
                <Link href={`/campaigns/${address}`}>
                    View Campaign
                </Link>
              ),
              fluid: true,
          }));
          setItems(itemsList);
        } catch (error) {
            console.error("Error fetching campaigns:", error);
        }
      };
      getCampaigns();
  }, []);

  return (
    <>
    <Navbar />
    <Container>
      
      <h2>Available Campaigns</h2>
      <Link href="campaigns/new">
        <Button inverted color='green' floated="right">
          Create Campaign
        </Button>
      </Link>
      <CardGroup items={items} />
    </Container>
    <Footer />
    </>
  );
}

export default Home;