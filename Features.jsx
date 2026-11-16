import FeatureCard from "./FeatureCard";
import features from "./featuresData";
import Reveal from "../ui/Reveal";

const Features = () => {
  return (
    <section
      id="features"
      className="
        py-28
        px-6
        bg-[#FFFCFD]
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <div className="text-center mb-16">

            <h2
              className="
                text-5xl
                font-bold
                text-slate-800
                dark:text-white
            
              "
            >
              Everything You Need 🌸
            </h2>

            <p
              className="
                text-slate-600
                dark:text-slate-300
                mt-5
                max-w-2xl
                mx-auto
                text-lg
                
              "
            >
              Meet Mimo, your AI companion that helps you organize,
              plan, and improve your daily life.
            </p>

          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <Reveal
              key={feature.id}
              delay={index * 0.15}
            >
              <FeatureCard feature={feature} />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;