const HeroBackground = () => {
  return (
    <>
      {/* Top Left Glow */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[550px]
          h-[550px]
          rounded-full
          bg-pink-300/25
          dark:bg-pink-600/10
          blur-[160px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          top-20
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-pink-300/25
          dark:bg-purple-600/10
          blur-[170px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[350px]
          rounded-full
          bg-sky-200/20
          dark:bg-blue-600/10
          blur-[170px]
        "
      />

      {/* Decorative circles */}
      <div
        className="
          absolute
          top-52
          right-44
          w-4
          h-4
          rounded-full
          bg-pink-300
          dark:bg-pink-500/40
          opacity-70
        "
      />

      <div
        className="
          absolute
          top-72
          right-72
          w-3
          h-3
          rounded-full
          bg-pink-400
          dark:bg-purple-400/40
          opacity-70
        "
      />

      <div
        className="
          absolute
          bottom-36
          right-24
          w-5
          h-5
          rounded-full
          bg-pink-200
          dark:bg-pink-400/30
          opacity-60
        "
      />
    </>
  );
};

export default HeroBackground;