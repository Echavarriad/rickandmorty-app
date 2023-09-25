import React from "react";
import { View, Button } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../CarouselCardItem.js";
import Mymodal from "../page/Info.js";

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getcharacters = async () => {
      const results = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setData(results.data.results);
    };

    getcharacters();
  }, []);

  return (
    <View>
      <Carousel
        layout="rickandmorty"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
