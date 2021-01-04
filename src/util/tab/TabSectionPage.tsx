import React, { ReactChildren, ReactChild, ReactNode } from "react";
import styled from "styled-components";
import TabSection from "./TabSection";

const TabSectionPage = () => {
  return (
    <>
      <TabSection tabData={[{ id: 1, text: 'name' }, { id: 2, text: 'name2' }, { id: 3, text: 'name3' }]}>
        <div>🎁 첫번째 노드</div>
        <div>👩🏻‍💻 두번째 노드</div>
        <div>👩🏻‍ 세번째 노드</div>
      </TabSection>
    </>
  )
}

export default TabSectionPage;

