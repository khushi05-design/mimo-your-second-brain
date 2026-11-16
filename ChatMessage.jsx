const ChatMessage = ({ sender, message }) => {
  const isBot = sender === "bot";

  return (
    <div
      className={`flex ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          isBot
            ? "bg-slate-200 dark:bg-slate-700"
            : "bg-pink-400 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;