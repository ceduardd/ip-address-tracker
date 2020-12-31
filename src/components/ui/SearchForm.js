import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/actions';

import iconArrow from '../../assets/icon-arrow.svg';

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
  border-radius: 10px 0 0 10px;
  font-size: 18px;
  font-family: inherit;
  width: 100%;
  height: 100%;
  position: relative;
  border: none;

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

const SearchForm = () => {
  const dispatch = useDispatch();

  const searchData = useSelector(state => state.searchData);
  const { error } = searchData;

  const [address, setAddress] = useState('');

  useEffect(() => {
    if (error) {
      toast(error, toast.TYPE.ERROR);
    }
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(fetchData(address));
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <Input
        placeholder="Search for any IP address or domain"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <ButtonWrapper>
        <img src={iconArrow} alt="icon-arrow" />
      </ButtonWrapper>
    </SearchFormWrapper>
  );
};

export default SearchForm;
