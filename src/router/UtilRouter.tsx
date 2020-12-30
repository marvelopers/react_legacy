import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CalendarPage from '../util/calendar/CalendarPage';


function UtilRouter() {
  return (
    <Switch>
      <Route path="/util/calendar">
        <CalendarPage />
      </Route>
      <Route path="/util/modal">
      </Route>
      <Route path="/util/item_checkbox">
      </Route>
    </Switch>
  )
}


export default UtilRouter;
