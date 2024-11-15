export type ImageData = {
  thumbnail: string;
  image: string;
  foregroundCutout?: string;
};

export const sliderImages: ImageData[] = [
  {
    thumbnail: "assets/1-thumbnail.png",
    image: "assets/1-background.png",
    foregroundCutout: "assets/1-foreground-cutout.png",
  },
  { thumbnail: "assets/2-thumbnail.png", image: "assets/2-background.png" },
  { thumbnail: "assets/3-thumbnail.png", image: "assets/3-background.png" },
  { thumbnail: "assets/4-thumbnail.png", image: "assets/4-background.png" },
  { thumbnail: "assets/5-thumbnail.png", image: "assets/5-background.png" },
  { thumbnail: "assets/6-thumbnail.png", image: "assets/6-background.png" },
];
