import React, { useState } from "react";
import DetailsToggle from "./component/Tab";
import styled from "styled-components";
import Tab from "./component/Tab";

interface TabProps {
  id: number,
  text: string
}

interface TabDataProps {
  tabData: TabProps[];
  children: React.ReactNode;
}

const TabSection = (props: TabDataProps) => {
  const { tabData, children } = props;
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabContentsArray = React.Children.toArray(children);

  const onClickTab = (index: number) => {
    setSelectedTab(index);
  }

  const selectedContentsElement = () => {
    return tabContentsArray[selectedTab]
  }

  return (
    <>
      <StyledTabSection>
        {tabData.map((tab, index) => (
          <Tab key={tab.id} text={tab.text} index={index} selectedTab={selectedTab} onClick={onClickTab} />
        ))}
      </StyledTabSection>
      {selectedContentsElement()}
    </>
  )
}

export default TabSection;

const StyledTabSection = styled.ul`  
  width: 100vw;
  display: flex;
  justify-content: space-a;
`;
