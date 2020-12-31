import React from "react";
import { useHistory } from "react-router";
import MobileHeader from "./component/MobileHeader";

const MobileHeaderPage = () => {
  const history = useHistory();
  return (
    <>
      <MobileHeader isBack={true} PageName={''} isCloseCallback={() => history.push("/main/")} />
    </>
  )
}

export default MobileHeaderPage;