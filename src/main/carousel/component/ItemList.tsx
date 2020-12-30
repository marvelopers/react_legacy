import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

type ItemList = {
  name?: string;
  goodsNo?: number;
  price?: number;
  imageUrl?: string;
};

interface ItemListProps {
  item_list: ItemList[];
}

export const ItemList = ({ item_list }: ItemListProps) => {
  const history = useHistory();
  return (
    <StyledCarousel>
      <ul>
        {item_list.map((item) => (
          <li key={item.goodsNo} onClick={() => { history.push('/') }}>
            <img src='./apple.jpg' alt="" />
            <div className="name">{item.name}</div>
            {item.price && <div className="price">{item.price}</div>}
          </li>
        ))}
      </ul>
    </StyledCarousel>
  )
};

const StyledCarousel = styled.div`
  padding: 0 20px;
  margin: 20px 0px;
  max-width: 748px;
  height: 204px;
  flex-wrap: nowrap;
  position: relative;
  box-sizing: border-box;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
  letter-spacing: -0.02em;


  ul{
    position: absolute;
    display: flex;
  }
  li{
    padding: 0px;
    margin: 0px;
  }
  div{
    line-height: 18px;
    font-size: 14px;    
    color: #292929;
  }

  .name{
    width: 129px;
    margin-bottom: 2px;
    height: 38px;
  }
  .price{
    margin-top: 8px;
  }

  img{
    box-sizing: border-box;
    margin-bottom: 8px;
    margin-right: 8px;
    width: 130px;
    height: 130px;
    border-radius: 10px;
    /* background: url(${(props) => props.imgSrc}); */
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; */
  }

`;