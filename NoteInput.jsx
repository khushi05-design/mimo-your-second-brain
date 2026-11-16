import { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleAdd = () => {
    if (!note.trim()) return;

    addNote(note);
    setNote("");
  };

  return (
    <div className="space-y-3">

      <textarea
        rows="3"
        placeholder="📝 Write a quick note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="
          w-full
          resize-none
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-800
          p-4
          outline-none
          focus:ring-2
          focus:ring-pink-300
        "
      />

      <button
        onClick={handleAdd}
        className="
          w-full
          py-3
          rounded-xl
          bg-pink-400
          hover:bg-pink-500
          text-white
          font-semibold
          transition
        "
      >
        Add Note
      </button>

    </div>
  );
};

export default NoteInput;