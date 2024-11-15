import { useState } from "react";
import { BannerInfo } from "./BannerInfo";
import { Thumbnails } from "./Thumbnails";
import { PhotoImage } from "./PhotoImage";
import { sliderImages } from "../constants/slider-data";
import "./styles/bg-gradient.css";

export function Banner({}: {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="flex flex-col mt-[20vh] p-8 lg:mt-[18vh] lg:p-24 relative bg-black">
      <div className="absolute inset-0 bg-gradient-left-to-right z-20" />
      <PhotoImage imageData={sliderImages[activeIndex]} />
      <BannerInfo />
      <Thumbnails activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </section>
  );
}
