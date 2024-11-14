import { useState } from "react";
import { PhotoImage } from "./PhotoImage";
import { sliderImages } from "../constants/slider-data";
import { Banner } from "./Banner";

export default function Layout() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Banner activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <PhotoImage src={sliderImages[activeIndex].image} />
    </>
  );
}
