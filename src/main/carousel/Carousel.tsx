import React from "react";
import styled from "styled-components";
import { ItemList } from "./component/ItemList";
import { useHistory } from "react-router";

type ItemList = {
  name?: string;
  goodsNo?: number;
  price?: number;
  imageUrl?: string;
};

interface CarouselProps {
  title: string;
  sub_title: string;
  item_list: ItemList[];
  more_url: string;
}

const Carousel = (props: CarouselProps) => {
  const { title, sub_title, item_list, more_url } = props;
  const history = useHistory();
  return (
    <StyledWrap>
      <div className="title">{title}</div>
      <div className="sub_title">{sub_title}</div>
      <ItemList item_list={item_list} />
      {more_url && <button onClick={() => history.push(more_url)}>more</button>}
    </StyledWrap>
  )
}

export default Carousel;

const StyledWrap = styled.div`
  .title{
    padding-left: 20px;
    white-space: pre-wrap;
    margin-bottom: 10px;
    line-height: 29px;
    width: 250px;
    font-weight: 700;
    font-size: 20px;
    color: #292929;
  }
  .sub_title {
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 12px;
    color: #292929;
  }
  .button{
    padding: 0 20px;
  }
`;