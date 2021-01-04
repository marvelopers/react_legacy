import React, { ReactChildren, ReactChild, ReactNode } from "react";
import styled from "styled-components";

interface TabProps {
  key: number;
  text: string;
  index: number;
  selectedTab: number;
  onClick: Function;
}

const Tab = (props: TabProps) => {
  const { text, key, index, selectedTab, onClick } = props;
  return (
    <StyledTab className={selectedTab === index ? 'active' : ""}>
      <button onClick={(e) => { onClick(index) }}>
        <span>{text}</span>
      </button>
    </StyledTab>
  )
}

export default Tab;

const StyledTab = styled.li`
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
  
  &.active{
    border-bottom: 2px solid #494949;
  }
`;