import styled from 'styled-components';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useContext } from 'react';
import AppContext from 'context/AppContext';
const Header = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    box-shadow: none;
  `;

  const { value, handleChange2 } = useContext(AppContext);
  return (
    <Wrapper>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange2}
          aria-label="disabled tabs example">
          <Tab label="All" />
          <Tab label="Active" />
          <Tab label="Completed" />
        </Tabs>
      </Paper>
    </Wrapper>
  );
};

export default Header;
