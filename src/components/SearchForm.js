import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { GlobalContext } from '../context/GlobalState';
import { getData } from './DataService';

import iconArrow from '../assets/icon-arrow.svg';

const SearchFormWrapper = styled.form`
  height: 50px;
  width: 500px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  @media screen and (max-width: 959px) {
    width: 90%;
    margin-bottom: 160px;
  }
`;

const Input = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 10px 0 0 10px;
  font-size: 18px;
  font-family: inherit;
  width: 100%;
  height: 100%;
  position: relative;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ButtonWrapper = styled.button`
  border: none;
  border-radius: 0 10px 10px 0;
  background-color: hsl(0, 0%, 17%);
  height: 100%;
  padding: 10px 20px;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: hsl(0, 0%, 30%);
  }
`;

const domainRegex = new RegExp(
  '^(https?://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$'
);

const ipRegex = new RegExp(
  '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
);

const SearchForm = () => {
  const { loadData } = useContext(GlobalContext);

  const [value, setValue] = useState('');

  const getNewData = async () => {
    let newData;

    if (value.match(ipRegex)) {
      newData = await getData(value);
    } else {
      newData = await getData(null, value);
    }

    if (!newData) {
      // alert('Not found data!');
      toast.error(
        `Not found!
        Try with wwww.domain.com
        `
      );
      return;
    }

    loadData(newData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.match(ipRegex) || value.match(domainRegex)) {
      getNewData();
    } else {
      toast.error(
        `Not found!
        Try with wwww.domain.com
        `
      );
    }
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <Input
        placeholder="Search for any IP address or domain"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <ButtonWrapper>
        <img src={iconArrow} alt="icon-arrow" />
      </ButtonWrapper>
    </SearchFormWrapper>
  );
};

export default SearchForm;
