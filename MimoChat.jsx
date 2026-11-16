import { useEffect, useRef, useState } from "react";

const MimoChat = ({ tasks = [], userName, notes = [] }) => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  const userEmail = localStorage.getItem("userEmail");

  const getStorageKey = () => {
    return `mimoChat_${userEmail}`;
  };

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem(
      `mimoChat_${userEmail}`
    );

    return savedMessages
      ? JSON.parse(savedMessages)
      : [
          {
            id: 1,
            sender: "mimo",
            text: `Hi ${userName} 🌸 I'm Mimo! How can I help you today?`,
          },
        ];
  });

  // Save chat for current user
  useEffect(() => {
    localStorage.setItem(
      getStorageKey(),
      JSON.stringify(messages)
    );
  }, [messages]);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  // 🤖 MIMO BRAIN
  const getMimoReply = (userMessage) => {
    const text = userMessage.toLowerCase();

    const total = tasks.length;

    const completed = tasks.filter(
      (task) => task.completed
    ).length;

    const remaining = tasks.filter(
      (task) => !task.completed
    );

    const progress =
      total === 0
        ? 0
        : Math.round((completed / total) * 100);

    // 📝 NOTES
    if (
      text.includes("my notes") ||
      text.includes("show my notes") ||
      text.includes("what did i write") ||
      text.includes("my note")
    ) {
      if (!notes || notes.length === 0) {
        return `You don't have any notes yet, ${userName} 🌸`;
      }

      const noteList = notes
        .map((note, index) => {
          return `${index + 1}. ${note.text}`;
        })
        .join("\n");

      return `Here are your notes, ${userName} 📝🌸\n\n${noteList}`;
    }

    // 📋 TASKS
    if (
      text.includes("show my task") ||
      text.includes("my task") ||
      text.includes("what do i have")
    ) {
      if (remaining.length === 0) {
        return `YAYYY 🎉 You have no pending tasks, ${userName}! 🌸`;
      }

      const taskList = remaining
        .map((task, index) => {
          return `${index + 1}. ${task.text} (${task.priority} priority)`;
        })
        .join("\n");

      return `Here are your pending tasks 📋🌸\n\n${taskList}`;
    }

    // 📅 NEXT DEADLINE
    if (
      text.includes("deadline") ||
      text.includes("due date") ||
      text.includes("due")
    ) {
      const tasksWithDates = remaining
        .filter((task) => task.dueDate)
        .sort(
          (a, b) =>
            new Date(a.dueDate) -
            new Date(b.dueDate)
        );

      if (tasksWithDates.length === 0) {
        return `You don't have any upcoming deadlines 📅🌸`;
      }

      const nextTask = tasksWithDates[0];

      return `Your next deadline is "${nextTask.text}" 📅⏰\nDue on: ${nextTask.dueDate}`;
    }

    // 🧠 PLAN TASKS
    if (
      text.includes("plan my task") ||
      text.includes("plan my day") ||
      text.includes("organize my task") ||
      text.includes("what should i do")
    ) {
      if (remaining.length === 0) {
        return `YAYYY 🎉 You have completed everything! Enjoy your day, ${userName} 🌸`;
      }

      const priorityOrder = {
        High: 1,
        Medium: 2,
        Low: 3,
      };

      const plannedTasks = [...remaining].sort(
        (a, b) => {
          const priorityDifference =
            priorityOrder[a.priority] -
            priorityOrder[b.priority];

          if (priorityDifference !== 0) {
            return priorityDifference;
          }

          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;

          return (
            new Date(a.dueDate) -
            new Date(b.dueDate)
          );
        }
      );

      const plan = plannedTasks
        .map((task, index) => {
          return `${index + 1}. ${task.text} (${task.priority} priority)`;
        })
        .join("\n");

      return `Okay ${userName} 🤖🌸 Here's your smart plan:\n\n${plan}\n\nStart with the first task 💪✨`;
    }

    // 🎯 FIRST TASK
    if (
      text.includes("what should i do first") ||
      text.includes("which task first") ||
      text.includes("start with")
    ) {
      if (remaining.length === 0) {
        return `Everything is done 🎉 You're amazing, ${userName}!`;
      }

      const highPriorityTask = remaining.find(
        (task) => task.priority === "High"
      );

      const firstTask =
        highPriorityTask || remaining[0];

      return `I think you should start with "${firstTask.text}" 🔴🌸 It's the best place to begin!`;
    }

    // 📊 PROGRESS
    if (
      text.includes("how am i doing") ||
      text.includes("how am i") ||
      text.includes("my progress") ||
      text.includes("progress")
    ) {
      return `You're doing great, ${userName} 🌸 You have completed ${progress}% of your tasks! 💪`;
    }

    // 💖 MOTIVATION
    if (
      text.includes("motivat") ||
      text.includes("feeling lazy") ||
      text.includes("tired")
    ) {
      return `You already completed ${completed} task${
        completed !== 1 ? "s" : ""
      } 💖 Just focus on one small task now. Mimo believes in you 🤖🌸`;
    }

    // 👋 GREETINGS
    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return `Hiii ${userName} 🤖🌸 I'm happy to see you!`;
    }

    return "Hmm 🤔 I'm still learning! Try asking me about your tasks, notes, progress, or deadlines 🌸";
  };

  // 📩 SEND MESSAGE
  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const mimoMessage = {
        id: Date.now() + 1,
        sender: "mimo",
        text: getMimoReply(userMessage.text),
      };

      setMessages((prev) => [
        ...prev,
        mimoMessage,
      ]);

      setIsTyping(false);
    }, 800);
  };

  // ⚡ QUICK MESSAGE
  const sendQuickMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setIsTyping(true);

    setTimeout(() => {
      const mimoMessage = {
        id: Date.now() + 1,
        sender: "mimo",
        text: getMimoReply(text),
      };

      setMessages((prev) => [
        ...prev,
        mimoMessage,
      ]);

      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5">

        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-3xl">
          🤖
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Mimo
          </h2>

          <p className="text-sm text-green-500">
            ● Online
          </p>
        </div>

      </div>

      {/* CHAT */}
      <div className="h-72 overflow-y-auto space-y-3 mb-4">

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`
                max-w-[75%]
                px-4
                py-3
                rounded-2xl
                shadow-sm
                whitespace-pre-line
                ${
                  msg.sender === "user"
                    ? "bg-pink-400 text-white"
                    : "bg-pink-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }
              `}
            >
              {msg.text}
            </div>

          </div>
        ))}

        {/* TYPING */}
        {isTyping && (
          <div className="flex justify-start">

            <div className="bg-pink-50 dark:bg-slate-800 px-4 py-3 rounded-2xl text-slate-400">

              <span className="animate-pulse">
                Mimo is thinking... 🤔
              </span>

            </div>

          </div>
        )}

        <div ref={chatEndRef} />

      </div>

      {/* QUICK SUGGESTIONS */}
      <div className="flex gap-2 flex-wrap mb-4">

        <button
          onClick={() =>
            sendQuickMessage("Show my tasks")
          }
          className="px-3 py-2 rounded-full bg-pink-50 dark:bg-slate-800 text-pink-500 text-sm hover:bg-pink-100 dark:hover:bg-slate-700 transition"
        >
          📋 My Tasks
        </button>

        <button
          onClick={() =>
            sendQuickMessage(
              "What is my next deadline?"
            )
          }
          className="px-3 py-2 rounded-full bg-pink-50 dark:bg-slate-800 text-pink-500 text-sm hover:bg-pink-100 dark:hover:bg-slate-700 transition"
        >
          📅 Deadline
        </button>

        <button
          onClick={() =>
            sendQuickMessage("How am I doing?")
          }
          className="px-3 py-2 rounded-full bg-pink-50 dark:bg-slate-800 text-pink-500 text-sm hover:bg-pink-100 dark:hover:bg-slate-700 transition"
        >
          📊 Progress
        </button>

        <button
          onClick={() =>
            sendQuickMessage("Motivate me")
          }
          className="px-3 py-2 rounded-full bg-pink-50 dark:bg-slate-800 text-pink-500 text-sm hover:bg-pink-100 dark:hover:bg-slate-700 transition"
        >
          💖 Motivate Me
        </button>

      </div>

      {/* INPUT */}
      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Talk to Mimo..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="
            flex-1
            px-4
            py-3
            rounded-xl
            border
            border-pink-300
            dark:border-slate-700
            dark:bg-slate-800
            outline-none
            focus:ring-2
            focus:ring-pink-300
          "
        />

        <button
          onClick={sendMessage}
          className="
            px-5
            rounded-xl
            bg-pink-400
            hover:bg-pink-500
            text-white
            font-semibold
            transition
          "
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default MimoChat;