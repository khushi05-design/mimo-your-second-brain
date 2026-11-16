import ChatBubble from "./ChatBubble";

const ChatPreview = () => {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-pink-400 font-semibold mb-4">
            ✨ Meet Mimo
          </p>

          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Your AI companion,
            <br />
            always by your side.
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Mimo helps you organize your day, remember important things,
            summarize notes, and gently keep you on track.
          </p>

        </div>

        {/* Chat Window */}
        <div className="bg-white rounded-[32px] shadow-2xl p-6 border border-pink-100 space-y-4">

          <ChatBubble
            mimo
            text="Good morning! 🌸 You have 4 tasks today."
          />

          <ChatBubble
            text="Can you plan my day?"
          />

          <ChatBubble
            mimo
            text="Absolutely! I already organized your schedule and left some focus time for studying. 💜"
          />

        </div>

      </div>
    </section>
  );
};

export default ChatPreview;