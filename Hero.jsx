import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroBackground from "./HeroBackground";
import GradientBackground from "../ui/GradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFFCFD] dark:bg-slate-950 transition-colors duration-300">

      <GradientBackground />

      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-24 items-center">

        <HeroContent />

        <HeroImage />

      </div>

    </section>
  );
};

export default Hero;