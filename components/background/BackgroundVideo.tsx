export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 z-0 h-full w-full object-cover opacity-20"
    >
      <source src="/video/Jam-Vid.mp4" type="video/mp4" />
    </video>
  );
}
