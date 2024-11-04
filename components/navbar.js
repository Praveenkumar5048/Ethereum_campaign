import React from 'react'
import { Header, Segment } from 'semantic-ui-react';

const navbar = () => {

  return (
    <div style={{ marginBottom: 20, textAlign: 'center' }}>
    <Header 
      as='h2' 
      attached='top' 
      style={{
        background: 'linear-gradient(135deg, #4CAF50, #8BC34A)', 
        color: 'white', 
        fontFamily: 'Poppins sans-serif',
        padding: '20px', 
        fontSize: '3rem', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      Welcome to Vision Vault
    </Header>
    <Segment 
      attached 
      style={{
        backgroundColor: '#f4f4f9', 
        padding: '15px', 
        fontFamily: 'Roboto sans-serif',
        fontSize: '1.8rem',
        color: '#333',
        borderRadius: '0 0 10px 10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      This is a Blockchain-based Crowd Funding Platform
    </Segment>
  </div>
  )
  
};

export default navbar;
