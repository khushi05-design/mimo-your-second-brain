import MimoEyes from "./MimoEyes";

const MimoFace = () => {
  return (
    <div className="absolute inset-0">

      <MimoEyes />

      <div className="flex justify-center mt-8">
        <div className="w-12 h-1 bg-slate-700 rounded-full" />
      </div>

      {/* Left blush */}
      <div className="absolute left-16 top-36 w-6 h-6 rounded-full bg-pink-300 opacity-60" />

      {/* Right blush */}
      <div className="absolute right-16 top-36 w-6 h-6 rounded-full bg-pink-300 opacity-60" />

    </div>
  );
};

export default MimoFace;