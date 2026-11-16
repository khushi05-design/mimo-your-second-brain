const MimoBody = () => {
  return (
    <>
      {/* Body */}
      <div
        className="
absolute
w-[270px]
h-[270px]
rounded-full
bg-gradient-to-br
from-pink-200
via-pink-100
to-pink-200
shadow-[0_20px_55px_rgba(180,140,255,0.30)]
overflow-hidden
"
      >
        {/* Gloss */}
        <div
          className="
          absolute
          top-[10%]
          left-[12%]
          w-[38%]
          h-[24%]
          rounded-full
          bg-white/35
          blur-lg
          "
        />
      </div>

      {/* Shadow */}
      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        bottom-[-8%]
        w-[65%]
        h-[6%]
        rounded-full
        bg-black/10
        blur-md
        "
      />
    </>
  );
};

export default MimoBody;