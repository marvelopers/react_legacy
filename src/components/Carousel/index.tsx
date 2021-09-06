import React from "react";
import { useHistory } from "react-router";
import * as Styles from './styles';
import { ItemList } from "../ItemList";

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
    <Styles.Wrapper>
      <Styles.Title>{title}</Styles.Title>
      <Styles.SubTitle>{sub_title}</Styles.SubTitle>
      <ItemList item_list={item_list} />
      {more_url && <button onClick={() => history.push(more_url)}>more</button>}
    </Styles.Wrapper>
  )
}

export default Carousel;
