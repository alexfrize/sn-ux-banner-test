import { ThumbnailItem } from "./ThumbnailItem";
import { sliderImages } from "../constants/slider-data";

export function Thumbnails({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  return (
    <div className="flex my-12 sm:mb-32 lg:my-12 z-20">
      <section className="flex flex-row flex-wrap lg:flex-nowrap gap-0 lg:gap-4 xl:gap-12 w-full lg:max-w-[1200px] items-center lg:items-end h-[240px] justify-between z-10">
        {sliderImages.map((image, index) => (
          <ThumbnailItem
            key={`slider-item-${index}`}
            src={image.thumbnail}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </section>
    </div>
  );
}
