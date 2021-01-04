import React from "react";
import DetailsToggle from "./component/DetailsToggle";

const DetailsTogglePage = () => {

  return (
    <>
      <h2> 버튼을 누르면 토글이 가능합니다.</h2>
      <DetailsToggle title={'details1'} >
        <div className="title"></div>
        <p> 자세한 설명을 이렇게 씁니다.</p>
        <p> 자세한 설명을 이렇게 씁니다.</p>
        <p> 자세한 설명을 이렇게 씁니다.</p>
      </DetailsToggle>
      <DetailsToggle title={'details2'} >
        <div className="title"></div>
        <p> 자세한 설명을 이렇게 씁니다.</p>
        <p> 자세한 설명을 이렇게 씁니다.</p>
        <p> 자세한 설명을 이렇게 씁니다.</p>
      </DetailsToggle>
      <DetailsToggle title={'detail3'} >
        <div className="title"></div>
        <p> 자세한 설명을 이렇게 씁니다.</p>
        <p> 자세한 설명을 이렇게 씁니다.</p>
        <p> 자세한 설명을 이렇게 씁니다.</p>
      </DetailsToggle>
    </>
  )
}

export default DetailsTogglePage;