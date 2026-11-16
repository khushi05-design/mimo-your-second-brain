import NoteInput from "./NoteInput";
import NoteItem from "./NoteItem";

const NotesCard = ({ notes, setNotes }) => {
  console.log("NOTES:", notes);
  console.log("IS ARRAY:", Array.isArray(notes));

  // Safety fix: always make sure notes is an array
  const safeNotes = Array.isArray(notes) ? notes : [];

  const addNote = (text) => {
    if (!text.trim()) return;

    const newNote = {
      id: Date.now(),
      text,
    };

    setNotes((prev) => {
      const previousNotes = Array.isArray(prev) ? prev : [];

      return [...previousNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      const previousNotes = Array.isArray(prev) ? prev : [];

      return previousNotes.filter(
        (note) => note.id !== id
      );
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg dark:shadow-black/30 p-6 transition-colors duration-300">

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
        📝 Notes
      </h2>

      <NoteInput addNote={addNote} />

      <div className="mt-6 grid gap-4 max-h-80 overflow-y-auto">

        {safeNotes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">

            <div className="text-6xl mb-4">
              📒
            </div>

            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              No Notes Yet
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Write your first sticky note 🌸
            </p>

          </div>
        ) : (
          safeNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
            />
          ))
        )}

      </div>

    </div>
  );
};

export default NotesCard;