import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import CalendarPage from '../util/calendar/CalendarPage';
import ModalPage from '../util/modal/ModalPage';
import MobileHeader from '../util/mobileHeader/component/MobileHeader';
import DetailsTogglePage from '../util/detailsToggle/DetailsTogglePage';


function UtilRouter() {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/util/calendar">
        <MobileHeader isBack={true} PageName={'dayjs로 calendar만들기'} isCloseCallback={() => history.push("/main")} />
        <CalendarPage />
      </Route>
      <Route path="/util/modal">
        <MobileHeader isBack={true} PageName={'모달 페이지'} isCloseCallback={() => history.push("/main")} />
        <ModalPage />
      </Route>
      <Route path="/util/item_checkbox">
      </Route>
      <Route path="/util/detail">
        <MobileHeader isBack={true} PageName={'토글 페이지'} isCloseCallback={() => history.push("/main")} />
        <DetailsTogglePage />
      </Route>
    </Switch>
  )
}


export default UtilRouter;
