import { Sparkles } from "lucide-react";

const SummaryCard = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 rounded-3xl p-6 text-white shadow-xl">

      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={22} />
        <h3 className="font-bold text-lg">
          AI Summary
        </h3>
      </div>

      <p className="leading-7 opacity-95">
        🌸 You're making great progress today!
        You completed two important tasks already.
        Keep going—you've got this!
      </p>

    </div>
  );
};

export default SummaryCard;