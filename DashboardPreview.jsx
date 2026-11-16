import DashboardCard from "./DashboardCard";
import Reveal from "../ui/Reveal";

const DashboardPreview = () => {
  return (
    <section
      className="
        py-28
        bg-white
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >

      <div className="max-w-7xl mx-auto px-6">

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
              Your Productivity at a Glance 📈
            </h2>

            <p
              className="
                mt-5
                text-slate-600
                dark:text-slate-300
                text-lg
              "
            >
              Everything you need to stay organized in one beautiful dashboard.
            </p>

          </div>
        </Reveal>

        <Reveal>

          <div
            className="
              bg-[#FFF8FB]
              dark:bg-slate-900
              rounded-[40px]
              p-10
              shadow-2xl
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
              transition-colors
              duration-300
            "
          >

            <DashboardCard
              title="Tasks Completed"
              value="24"
              color="#F472B6"
            />

            <DashboardCard
              title="Focus Time"
              value="5.8 hrs"
              color="#8B5CF6"
            />

            <DashboardCard
              title="Habits"
              value="12"
              color="#22C55E"
            />

            <DashboardCard
              title="Mood"
              value="😊 Happy"
              color="#FACC15"
            />

          </div>

        </Reveal>

      </div>

    </section>
  );
};

export default DashboardPreview;