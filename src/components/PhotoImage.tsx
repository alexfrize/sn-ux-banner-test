export function PhotoImage({ src }: { src: string }) {
  return (
    <div className="w-full h-auto">
      <img src={src} alt="rico" className="w-full h-auto" />
    </div>
  );
}
