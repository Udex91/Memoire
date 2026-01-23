import React from "react"
import { useState } from 'react';

const AddNote = ({ createNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length === 0) return;
    createNote(noteText);
    setNoteText('');
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        placeholder="Start typing your memoire here..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
