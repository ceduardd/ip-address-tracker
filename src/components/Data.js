import React from 'react';
import styled from 'styled-components';

const DataWrapper = styled.div`
  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      top: 8%;
      right: 0;
      width: 1px;
      height: 65px;
      background-color: #f2f2f2;
    }
  }
  padding: 0 20px;
  position: relative;

  @media screen and (max-width: 959px) {
    border: 0 !important;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const NameWrapper = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0;
  color: hsl(0, 0%, 59%);
`;

const ContentWrapper = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 10px 0 0;
`;

const Data = ({ name, content }) => {
  return (
    <DataWrapper>
      <NameWrapper>{name}</NameWrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </DataWrapper>
  );
};

export default Data;
