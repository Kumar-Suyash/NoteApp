import { useEffect, useState } from "react";
import { getNotes, deleteNote, updateNote } from "../services/noteService";
import NoteCard from "../components/NoteCard";
import ConfirmModal from "../components/ConfirmModal";
import "../styles/NotesList.css";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editingData, setEditingData] = useState({ note_name: "", note_dec: "" });
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.payload || []);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Open confirm dialog and save note ID to delete
  const confirmDelete = (id) => {
    setNoteToDelete(id);
    setIsConfirmOpen(true);
  };

  // If user confirms, delete the note
  const handleConfirmDelete = async () => {
    if (!noteToDelete) return;
    try {
      await deleteNote(noteToDelete);
      setNotes(notes.filter((note) => note._id !== noteToDelete));
    } catch (error) {
      console.error("Error deleting note:", error);
    } finally {
      setIsConfirmOpen(false);
      setNoteToDelete(null);
    }
  };

  // Cancel button closes modal with no action
  const handleCancelDelete = () => {
    setIsConfirmOpen(false);
    setNoteToDelete(null);
  };

  const handleDelete = (id) => {
    confirmDelete(id);
  };

  /* Your existing editing handlers */

  const handleEdit = (note) => {
    setEditingNoteId(note._id);
    setEditingData({ note_name: note.note_name, note_dec: note.note_dec });
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
    setEditingData({ note_name: "", note_dec: "" });
  };

  const handleInputChange = (e) => {
    setEditingData({ ...editingData, [e.target.name]: e.target.value });
  };

  const handleSaveEdit = async (id) => {
    try {
      await updateNote(id, editingData);
      setNotes(
        notes.map((note) =>
          note._id === id ? { ...note, ...editingData } : note
        )
      );
      setEditingNoteId(null);
      setEditingData({ note_name: "", note_dec: "" });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <div className="notes-list-container">
      <h2 className="notes-list-title">All Notes</h2>
      <div className="notes-grid">
        {notes.length > 0 ? (
          notes.map((note) =>
            editingNoteId === note._id ? (
              <div key={note._id} className="note-edit-form">
                <input
                  type="text"
                  name="note_name"
                  value={editingData.note_name}
                  onChange={handleInputChange}
                  placeholder="Title"
                />
                <textarea
                  name="note_dec"
                  value={editingData.note_dec}
                  onChange={handleInputChange}
                  placeholder="Content"
                  rows={4}
                />
                <button onClick={() => handleSaveEdit(note._id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <NoteCard
                key={note._id}
                note={note}
                onDelete={() => handleDelete(note._id)}
                onEdit={() => handleEdit(note)}
              />
            )
          )
        ) : (
          <p className="notes-empty">No notes available</p>
        )}
      </div>
      <ConfirmModal
        isOpen={isConfirmOpen}
        message="Do you want to delete?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default NotesList;
