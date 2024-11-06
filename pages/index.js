import React, {useState, useEffect} from 'react';
import {Segment, Loader, Dimmer, Button, Image, Container, CardGroup } from 'semantic-ui-react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import factory from '../Ethereum/factory.js' ;
import Link from 'next/link';

const Home = () => {
  
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

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
        setLoader(false)
      };
      getCampaigns();
  }, []);

  return (
    <>
    <Navbar />
    <Container>
      
      {loader ? 
          <Loader active inline='centered'content='Loading' />
        : <>
            <h2>Available Campaigns</h2>
            <Link href="campaigns/new">
              <Button inverted color='green' floated="right">
                Create Campaign
              </Button>
            </Link>
            {items.length === 0 ? 
              ( <p>No campaigns available</p>) : 
              ( <CardGroup items={items} /> )
            }
          </>
        
      }

    </Container>
    <Footer />
    </>
  );
}

export default Home;