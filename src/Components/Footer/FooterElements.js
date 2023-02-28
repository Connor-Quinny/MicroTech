import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #030512;
  padding: 40px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex-basis: 33.33%;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    flex-basis: auto;
    margin-bottom: 20px;
    margin-left: 30px;
  }

    @media (max-width: 768px) {
    flex-basis: auto;
    margin-bottom: 20px;
    margin-left: 30px;
  }
`;

export const Heading = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 5px;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 5px;
  color: white;
  margin-bottom: 5px;
`;