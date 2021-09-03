import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import RootRouter from './router/RootRouter';
import { GlobalStyle } from './styles';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        {/* <MainNav categories={CATEGORIES} /> */}
        <RootRouter />
      </Switch>
    </BrowserRouter>
  )
};

const CATEGORY_MAIN = {
  name: '메인',
  open: 'main',
  subCategory: [[
    { name: '메인 캐로셀', to: '/main/carousel' }
  ]]
}

const CATEGORY_UTIL = {
  name: '유틸',
  open: 'util',
  subCategory: [[
    { name: '달력', to: '/util/calendar' },
    { name: '모달', to: '/util/modal' },
    { name: '아이템 체크박스', to: '/util/item_checkbox' }
  ]]
}

const CATEGORIES = [CATEGORY_MAIN, CATEGORY_UTIL];

/*
* BrowserRouter vs HashRouter
*/