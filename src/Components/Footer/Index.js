import React from 'react'
import {FooterWrapper, Container, Column, Heading, List, ListItem, Paragraph} from './FooterElements'

function Footer() {
    return (
      <FooterWrapper>
        <Container>
          <Column>
            <Heading>Contact Us</Heading>
            <List>
              <ListItem>Telephone: 0333 090 2471</ListItem>
              <ListItem>Email: info@microtechsciences.com</ListItem>
            </List>
          </Column>
          <Column>
            <Heading>Address</Heading>
            <Paragraph>Microtech Sciences Ltd</Paragraph>
            <Paragraph>Unit 3 Barnfield Way</Paragraph>
            <Paragraph>Lancashire</Paragraph>
            <Paragraph>BB5 5WJ</Paragraph>
          </Column>
          <Column>
            <Heading>Legal</Heading>
            <Paragraph>© Microtech Sciences Limited</Paragraph>
            <Paragraph>Company Reg No: 05114068</Paragraph>
            <Paragraph>Registered address: 66 Cross St, Sale, Manchester, M33 7AN</Paragraph>
            <Paragraph>UKAS Reg No: 2765</Paragraph>
            <Paragraph>Address: 2 Pine Trees, Chertsey Lane, Staines-Upon-Thames, TW18 3HR</Paragraph>
          </Column>
        </Container>
      </FooterWrapper>
    );
  }
  
  export default Footer;