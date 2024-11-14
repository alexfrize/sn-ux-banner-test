import { BannerInfo } from "./BannerInfo";
import { Slider } from "./Slider";
import "./bg-gradient.css";

export function Banner({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  return (
    <section className="flex flex-col bg-contain bg-no-repeat lg:h-full lg:bg-cover mt-[25vh] p-8 lg:mt-[18vh] lg:p-24 bg-[url('assets/1-background.png')] relative">
      <div className="absolute inset-0 bg-gradient-top-to-bottom z-20" />
      <div className="h-[90vw] lg:h-full absolute inset-0 top-[-15vh] right-[15vw] bg-[url('assets/1-foreground-cutout.png')] bg-contain bg-no-repeat bg-right-bottom z-10" />
      {/* <div className="absolute inset-0 bg-gradient-top-to-bottom" /> */}

      <div className="absolute inset-0 bg-gradient-left-to-right" />

      <div className="bg-gradient" />

      <BannerInfo />
      <Slider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </section>
  );
}
