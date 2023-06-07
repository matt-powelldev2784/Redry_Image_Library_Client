export const BgVideo = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute z-10 h-full w-full bg-repeat"
        style={{ backgroundImage: "url('/subtle-cross-lines.png')" }}
      ></div>
      <video
        loop
        muted
        autoPlay
        preload="auto"
        className="min-h-screen w-full object-cover"
      >
        <source src="/woman_field_sm4.mp4" type="video/mp4"></source>
      </video>
    </div>
  )
}
