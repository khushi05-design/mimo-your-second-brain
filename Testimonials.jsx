import Reveal from "../ui/Reveal";
import testimonials from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
  className="
    py-28
    bg-[#FFF8FB]
    dark:bg-slate-950
    transition-colors
    duration-300
  "
    >
      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-slate-800 dark:text-white">
              Loved by Users 💜
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-300 text-lg">
              Here's what people are saying about LifeOS.
            </p>

          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 0.15}
            >
              <TestimonialCard
                testimonial={testimonial}
              />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;