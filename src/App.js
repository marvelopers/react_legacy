import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './component/List';
import Card from './component/Card';
import CreateCard from './component/CreateCard';

function App() {

// const obj = [
//     {
//       key: 0,
//       title: '타이틀',
//       contents: '콘텐츠',
//       author: '작가',
//       createAt: new Date(),
//       updateAt: new Date(),
//     }
//   ]
//   localStorage.setItem('contentsList', JSON.stringify(obj));

  const [contentsList, setContentsList] =  useState(JSON.parse(localStorage.getItem('contentsList')));
  const [selectedIndex, setSelectedIndex] = useState(-1); 
  
  return (
    <>
      <List contentsList={contentsList} setSelectedIndex={setSelectedIndex} setContentsList={setContentsList}></List>
      <Card contentsList={contentsList} selectedIndex={selectedIndex} setContentsList={setContentsList}></Card>
    </>
  );
}

export default App;