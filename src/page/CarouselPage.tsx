import React from "react";
import { response } from "../lib/data";
import Carousel from "./Carousel";

const CarouselPage = () => {
  return (
    <>
      <Carousel
        title={'제목'}
        sub_title={'설명'}
        item_list={response.data.item_list}
        more_url={'/'}
      />
    </>
  )
}

export default CarouselPage;