import React, { ReactChildren, ReactChild, ReactNode } from "react";
import styled from "styled-components";


interface detailsToggleProps {
  title: string;
  children: ReactChildren | ReactChild | ReactNode;
}

const DetailsToggle = (props: detailsToggleProps) => {
  const { title, children } = props;
  return (
    <StyledDetails>
      <summary>{title}</summary>
      <div className="details">
        {children}
      </div>
    </StyledDetails>
  )
}

export default DetailsToggle;

const StyledDetails = styled.details`
  summary{
    cursor: pointer;
    list-style: none;
    position: relative;
    text-align: left;
    background: #F8F8F8;
    width: 100%;
    padding: 20px 48px 20px 16px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid #ededed;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::after{
    content: '>';
    position: absolute;        
    right: 16px;
    top: 24px;
  }
  .details{
    padding: 32px 16px;
    /* border-top: 1px solid #ededed; */
    box-sizing: border-box;

  }
`;