import React, { useState } from 'react';
import { MdDeleteForever, MdEdit, MdCheck, MdClose } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const saveEdit = () => {
    if (editedText.trim().length === 0) return;
    handleUpdateNote(id, editedText);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditedText(text);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <textarea
          rows="8"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{text}</span>
      )}

      <div className="note-footer">
        <small>{date}</small>

        <div className="note-actions">
          {isEditing ? (
            <>
              <MdCheck
                className="action-icon"
                onClick={saveEdit}
              />
              <MdClose
                className="action-icon"
                onClick={cancelEdit}
              />
            </>
          ) : (
            <>
              <MdEdit
                className="action-icon"
                onClick={() => setIsEditing(true)}
              />
              <MdDeleteForever
                className="action-icon delete-icon"
                onClick={() => handleDeleteNote(id)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
