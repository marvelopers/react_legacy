import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UtilRouter from './UtilRouter';
import CarouselPage from '../main/carousel/CarouselPage';


function RootRouter() {
  return (
    <Switch>
      <Route path='/main'>
        <CarouselPage />
      </Route>
      <Route path='/util'>
        <UtilRouter />
      </Route>
    </Switch>
  )
}

export default RootRouter;
