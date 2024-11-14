export function SliderItem({
  src,
  isActive,
  onClick,
}: {
  src: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="w-1/3 flex justify-center items-center">
      <div
        className={
          isActive
            ? "p-1 w-full md:w-[160px] lg:w-full lg:max-w-[200px] xl:w-[280px] h-auto relative gradient-border"
            : "p-1 w-full md:w-[160px] lg:w-full lg:max-w-[140px] xl:w-[160px] h-auto opacity-70"
        }
        style={{
          cursor: isActive ? "default" : "pointer",
          transition: "all 0.5s ease-out",
        }}
        onClick={onClick}
      >
        <img src={src} alt="thumbnail" className="w-full h-auto rounded-md" />
      </div>
    </div>
  );
}
