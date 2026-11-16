import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Mimo from "../mimo/Mimo";

const pages = [
  {
    title: "Meet Mimo 🌸",
    description:
      "Hii! I'm Mimo! I'm your tiny productivity buddy! I'll remember your notes, organize your tasks and cheer you on every day! 💕",
  },
  {
    title: "Smart Notes 📝",
    description:
      "Write anything! I'll keep every little idea safe so you'll never forget it! ✨",
  },
  {
    title: "Smart Calendar 📅",
    description:
      "Don't worry about deadlines anymore! I'll remind you before anything important happens! 🌷",
  },
  {
    title: "Productivity Dashboard 📈",
    description:
      "We'll complete tasks together and celebrate every achievement! One step at a time! 🎉",
  },
  {
    title: "You're Ready! 🌸",
    description:
      "Yayyy! Everything is ready! Let's start your LifeOS adventure together! 💖",
  },
];

const DemoModal = ({ open, onClose }) => {
  const [page, setPage] = useState(0);

  const userEmail = localStorage.getItem("userEmail");

  // 🎙️ Mimo Voice
  useEffect(() => {
    if (!open) return;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(
        pages[page].description
      );

      speech.rate = 1.05;
      speech.pitch = 1.8;
      speech.volume = 1;

      const loadVoice = () => {
        const voices = window.speechSynthesis.getVoices();

        const femaleVoice =
  voices.find(v => v.name.includes("Samantha")) ||
  voices.find(v => v.name.includes("Microsoft Zira")) ||
  voices.find(v => v.name.includes("Google UK English Female")) ||
  voices.find(v => v.name.includes("Female")) ||
  voices.find(v => v.lang.startsWith("en"));

        if (femaleVoice) {
          speech.voice = femaleVoice;
        }

        window.speechSynthesis.speak(speech);
      };

      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = loadVoice;
      } else {
        loadVoice();
      }
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [page, open]);

  const closeModal = () => {
    window.speechSynthesis.cancel();
    setPage(0);
    onClose();
  };

  const next = () => {
    if (page < pages.length - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const back = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[92%] max-w-xl rounded-3xl bg-white dark:bg-slate-900 p-10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -60, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">

<div className="flex justify-center mb-12">
  <div className="scale-[0.65] origin-center">
    <Mimo />
  </div>
</div>
</div>
                <h2 className=" mt-2 text-4xl font-bold text-slate-800 dark:text-white">
                  {pages[page].title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {pages[page].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress */}
            <div className="flex justify-center gap-3 mt-10">
              {pages.map((_, i) => (
                <div
                  key={i}
                  className={`transition-all duration-300 rounded-full ${
                    i === page
                      ? "w-8 h-3 bg-pink-500"
                      : "w-3 h-3 bg-pink-200 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-10">
              {page === 0 ? (
                <button
                  onClick={closeModal}
                  className="px-5 py-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-105 transition"
                >
                  Skip
                </button>
              ) : (
                <button
                  onClick={back}
                  className="px-5 py-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-105 transition"
                >
                  ← Back
                </button>
              )}

              {page < pages.length - 1 ? (
                <button
                  onClick={next}
                  className="px-6 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 hover:scale-105 transition"
                >
                  Next →
                </button>
              ) : userEmail ? (
                <Link
                  to="/dashboard"
                  onClick={closeModal}
                  className="px-6 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 hover:scale-105 transition"
                >
                  Go to Dashboard 🚀
                </Link>
              ) : (
                <Link
                  to="/register"
                  onClick={closeModal}
                  className="px-6 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 hover:scale-105 transition"
                >
                  Create Account ✨
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;