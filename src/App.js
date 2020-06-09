import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './component/List';
import Card from './component/Card';
import CreateCard from './component/CreateCard';

function App() {

  const [contentsList, setContentsList] =  useState(JSON.parse(localStorage.getItem('contentsList')));
  const [selectedIndex, setSelectedIndex] = useState(-1); 

  return (
    <>
      <List contentsList={contentsList} setSelectedIndex={setSelectedIndex}></List>
      {/* <Card contentsList={contentsList} selectedIndex={selectedIndex}></Card> */}
      <CreateCard contentsList={contentsList} setContentsList={setContentsList}></CreateCard>

    </>
  );
}

export default App;