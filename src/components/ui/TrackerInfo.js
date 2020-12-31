import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import Loader from './Loader';

import headerBg from '../../assets/pattern-bg.png';

const TrackerInfoWrapper = styled.header`
  background-image: url(${headerBg});
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const TitleWrapper = styled.h1`
  margin: 0;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BoardDataWrapper = styled.section`
  background-color: #fff;
  position: absolute;
  top: 70%;

  border-radius: 10px;
  padding: 20px 0;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 959px) {
    grid-template-columns: repeat(1, 1fr);
    top: 45%;
    max-width: 90%;
  }
`;

const DataWrapper = styled.div`
  overflow: hidden;
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

const ContentWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 10px 0 0;
`;

const TrackerInfo = ({ loading, host }) => {
  return (
    <TrackerInfoWrapper>
      <TitleWrapper>IP Address Tracker</TitleWrapper>

      <SearchForm />

      <BoardDataWrapper>
        <DataWrapper>
          <NameWrapper>IP Address</NameWrapper>
          <ContentWrapper>{loading ? <Loader /> : host.ip}</ContentWrapper>
        </DataWrapper>

        <DataWrapper>
          <NameWrapper>Location</NameWrapper>
          <ContentWrapper>
            {loading ? <Loader /> : host.location}
          </ContentWrapper>
        </DataWrapper>

        <DataWrapper>
          <NameWrapper>Timezone</NameWrapper>
          <ContentWrapper>
            {loading ? <Loader /> : host.timezone}
          </ContentWrapper>
        </DataWrapper>

        <DataWrapper>
          <NameWrapper>ISP</NameWrapper>
          <ContentWrapper>{loading ? <Loader /> : host.isp}</ContentWrapper>
        </DataWrapper>
      </BoardDataWrapper>
    </TrackerInfoWrapper>
  );
};

export default TrackerInfo;
