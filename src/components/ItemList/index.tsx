import React from "react";
import { useHistory } from "react-router";
import img from './apple.jpg';
import * as Styles from './styles';

type Item = {
  name?: string;
  goodsNo?: number;
  price?: number;
  imageUrl?: string;
};

interface ItemListProps {
  item_list: Item[];
}

export const ItemList = ({ item_list }: ItemListProps) => {
  const history = useHistory();
  return (
      <Styles.ItemList>
        {item_list.map((item) => (
          <Styles.Item key={item.goodsNo} onClick={() => { history.push('/') }}>
            <Styles.Img src={img} alt="" />
            <Styles.Name>{item.name}</Styles.Name>
            {item.price && <div className="price">{item.price}</div>}
          </Styles.Item>
        ))}
      </Styles.ItemList>
  )
};

