const NoteItem = ({ note, deleteNote }) => {
  const colors = [
    "bg-pink-100 border-pink-300",
    "bg-yellow-100 border-yellow-300",
    "bg-green-100 border-green-300",
    "bg-blue-100 border-blue-300",
    "bg-purple-100 border-purple-300",
  ];

  const color = colors[note.id % colors.length];

  return (
    <div
      className={`
        ${color}
        dark:bg-slate-800
        dark:border-slate-700
        rounded-2xl
        p-5
        border
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        rotate-1
        hover:rotate-0
      `}
    >
      <p className="text-slate-800 dark:text-white whitespace-pre-wrap leading-relaxed">
        {note.text}
      </p>

      <div className="flex justify-end mt-5">
        <button
          onClick={() => deleteNote(note.id)}
          className="text-red-500 hover:text-red-600 transition"
        >
          🗑
        </button>
      </div>
    </div>
  );
};

export default NoteItem;