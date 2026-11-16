import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import NoteInput from "../components/dashboard/NoteInput";
import NoteItem from "../components/dashboard/NoteItem";

const Notes = () => {
  const userEmail = localStorage.getItem("userEmail");

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(
      `notes_${userEmail}`
    );

    if (!savedNotes) {
      return [];
    }

    const parsedNotes = JSON.parse(savedNotes);

    return Array.isArray(parsedNotes)
      ? parsedNotes
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      `notes_${userEmail}`,
      JSON.stringify(notes)
    );
  }, [notes, userEmail]);

  const addNote = (text) => {
    if (!text.trim()) return;

    const newNote = {
      id: Date.now(),
      text,
    };

    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
  };

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        📝 My Notes
      </h1>

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

        <NoteInput addNote={addNote} />

        <div className="mt-6 grid gap-4">

          {notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">

              <div className="text-6xl mb-4">
                📒
              </div>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                No Notes Yet
              </h3>

              <p className="text-slate-500 mt-2">
                Write your first sticky note 🌸
              </p>

            </div>
          ) : (
            notes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                deleteNote={deleteNote}
              />
            ))
          )}

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Notes;