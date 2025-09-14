import "../styles/NoteCard.css";

const NoteCard = ({ note, onDelete, onEdit }) => {
  if (!note) return null;

  return (
    <div className="note-card">
      <div className="note-card-header">
        <h3 className="note-card-title">{note.note_name}</h3>
        <div className="note-card-meta">
          <span className="note-card-author">{note.name}</span>
          <span className="note-card-age">Age: {note.age}</span>
        </div>
      </div>

      <p className="note-card-description">{note.note_dec}</p>

      <div className="note-card-actions">
        <button
          onClick={() => onEdit(note)}
          className="note-card-button note-card-edit-btn"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note._id)}
          className="note-card-button note-card-delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
