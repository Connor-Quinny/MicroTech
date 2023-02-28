import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ContactContainer = styled.div`
  text-align: left;
  margin-top: 50px;
  width: 100%;
`;

const ContactTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactIcon = styled.div`
  margin-right: 10px;
  font-size: 24px;
  color: #333;
`;

const ContactText = styled.span`
  font-size: 18px;
  color: #555;
`;

function ContactUs() {
  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactDetails>
        <ContactItem>
          <ContactIcon>
            <FaMobileAlt />
          </ContactIcon>
          <ContactText>123-456-7890</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <FaEnvelope />
          </ContactIcon>
          <ContactText>info@example.com</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <FaMapMarkerAlt />
          </ContactIcon>
          <ContactText>
            Microtech Sciences Ltd <br/>
            Unit 3 Barnfield Way <br />
            Lancashire <br />
            BB5 5WJ
        </ContactText>
        </ContactItem>
      </ContactDetails>
    </ContactContainer>
  );
}

export default ContactUs