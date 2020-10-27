import React from 'react';
import styled from 'styled-components';

import SearchForm from './SearchForm';
import BoardData from './BoardData';

import headerBg from '../assets/pattern-bg.png';

const HeaderWrapper = styled.header`
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

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>IP Address Tracker</TitleWrapper>
      <SearchForm />
      <BoardData />
    </HeaderWrapper>
  );
};

export default Header;
