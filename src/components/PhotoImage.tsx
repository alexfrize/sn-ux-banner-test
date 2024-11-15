import { ImageData } from "../constants/slider-data";
export function PhotoImage({ imageData }: { imageData: ImageData }) {
  return (
    <div className="absolute inset-0 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-top-to-bottom-mobile z-10" />
        <img
          src={imageData.image}
          alt="rico"
          className="w-full object-contain lg:object-cover"
        />
        {imageData.foregroundCutout && (
          <img
            src={imageData.foregroundCutout}
            alt="rico"
            className="absolute bottom-0 right-[10vw] h-[calc(100%+70px)] lg:h-[calc(100%+90px)]"
          />
        )}
      </div>
    </div>
  );
}
