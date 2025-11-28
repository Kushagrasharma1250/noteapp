import React, { useState } from "react";

function NoteItem({ note, updateNote, deleteNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(note.text);

  const handleUpdate = () => {
    if (editValue.trim()) {
      updateNote(note.id, editValue);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(note.text);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <div className="edit-buttons">
            <button onClick={handleUpdate} className="save-button">
              Save
            </button>
            <button onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="view-mode">
          <p className="note-text">{note.text}</p>
          <div className="note-buttons">
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={() => deleteNote(note.id)} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
