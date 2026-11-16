import Mimo from "../mimo/Mimo";
import FloatingParticles from "../mimo/FloatingParticles";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center h-[500px] pointer-events-none">
      <FloatingParticles />
      <Mimo />
    </div>
  );
};

export default HeroImage;