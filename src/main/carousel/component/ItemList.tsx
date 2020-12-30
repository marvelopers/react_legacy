import React from "react";
import styled from "styled-components";
import img from './apple.jpg';
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
            <img src={img} alt="" />
            <div className="name">{item.name}</div>
            {item.price && <div className="price">{item.price}</div>}
          </li>
        ))}
      </ul>
    </StyledCarousel>
  )
};

const StyledCarousel = styled.div`

  ul{
    padding-left: 20px;
    margin: auto -20px;
    display: flex;
    overflow: auto;
    box-sizing: border-box;
    overflow: auto;
    flex-wrap: nowrap;
    &::-webkit-scrollbar{
      display: none;
    }
  }

  li{
    padding: 0px;
    margin: 0px;
  }

  .name{
    width: 129px;
    margin-bottom: 2px;
    height: 38px;
    line-height: 18px;
    font-size: 14px;    
    color: #292929;
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
    /* background: url({(pr_ops) => p_rops.imgSrc}); */
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; */
    }
`;