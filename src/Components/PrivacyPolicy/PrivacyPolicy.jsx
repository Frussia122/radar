import React from 'react'
import styled from 'styled-components';

const Title = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    margin-bottom: 32px;
`;

const Link = styled.a`
    
`
function PrivacyPolicy() {
  return (
    <Title>
        2023© <br></br>
      <Link>
        radardesign.ru
      </Link>
    </Title>
  )
}

export default PrivacyPolicy