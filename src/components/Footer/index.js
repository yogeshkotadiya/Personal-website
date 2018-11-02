import React from 'react';
import styled from 'react-emotion';

const Footerstyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  background: ${props => props.theme.backgroundColor};
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = () => {
  return (
    <Footerstyled>
      <p>© 2018 Yogesh Kotadiya</p>
    </Footerstyled>
  );
};

export default Footer;
