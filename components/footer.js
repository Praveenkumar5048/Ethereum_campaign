import React from 'react';
import { Segment } from 'semantic-ui-react';

const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  backgroundColor: '#f4f4f9',
  padding: '15px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.2rem',
  color: '#333',
  boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const Footer = () => {
  return (
    <Segment style={footerStyle}>
      <p>Made with Love ❤️ by PK</p>
      <p>&copy; {new Date().getFullYear()} Vision Vault. All rights reserved.</p>
    </Segment>
  );
};

export default Footer;
