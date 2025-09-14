import { useState } from "react";
import { createNote } from "../services/noteService";
import { toast } from "react-toastify"; // ✅ import toast
import "../styles/CreateNote.css";

const CreateNote = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [noteName, setNoteName] = useState("");
  const [noteDec, setNoteDec] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age || !noteName || !noteDec) {
      toast.warn("⚠️ Please fill in all fields");
      return;
    }

    try {
      // ✅ Use toast.promise for loading → success/error
      await toast.promise(
        createNote({ name, age, note_name: noteName, note_dec: noteDec }),
        {
          pending: "⏳ Creating note...",
          success: "✅ Note created successfully!",
          error: "❌ Failed to create note",
        }
      );

      // reset form only if success
      setName("");
      setAge("");
      setNoteName("");
      setNoteDec("");
    } catch (error) {
      console.error("Error creating note:", error);
      // no need to call toast.error here, handled by toast.promise
    }
  };

  return (
    <div className="create-note-container">
      <h2 className="create-note-title">Create a New Note</h2>
      <form className="create-note-form" onSubmit={handleSubmit}>
        <input
          className="create-note-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="create-note-input"
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="create-note-input"
          type="text"
          placeholder="Enter note title"
          value={noteName}
          onChange={(e) => setNoteName(e.target.value)}
        />
        <textarea
          className="create-note-textarea"
          placeholder="Enter note description"
          value={noteDec}
          onChange={(e) => setNoteDec(e.target.value)}
        />
        <button className="create-note-button" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
