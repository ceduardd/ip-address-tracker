import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import Data from './Data';

import { GlobalContext } from '../context/GlobalState';
import { getData } from './DataService';

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

const BoardData = () => {
  const { data, loadData } = useContext(GlobalContext);

  useEffect(() => {
    const getDefaultData = async () => {
      const defaultData = await getData();
      loadData(defaultData);
    };
    getDefaultData();
    // eslint-disable-next-line
  }, []);

  const renderContent = content => (content ? content : 'loading...');

  return (
    <BoardDataWrapper>
      <Data name={'IP Address'} content={renderContent(data.ip)} />
      <Data name={'Location'} content={renderContent(data.location)} />
      <Data name={'Timezone'} content={renderContent(data.timezone)} />
      <Data name={'ISP'} content={renderContent(data.isp)} />
    </BoardDataWrapper>
  );
};

export default BoardData;
