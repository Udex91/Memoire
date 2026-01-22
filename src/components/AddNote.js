import React, { useState } from 'react';

const AddNote = ({ createNote }) => {
  const [draftContent, setDraftContent] = useState('');
  const CHARACTER_LIMIT = 200;

  const updateDraftContent = (event) => {
    if (CHARACTER_LIMIT - event.target.value.length >= 0) {
      setDraftContent(event.target.value);
    }
  };

  const saveDraft = () => {
    if (draftContent.trim().length === 0) return;

    createNote(draftContent);
    setDraftContent('');
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        placeholder="Start typing your memoire here..."
        value={draftContent}
        onChange={updateDraftContent}
      />
      <div className="note-footer">
        <small>{CHARACTER_LIMIT - draftContent.length} remaining</small>
        <button className="save" onClick={saveDraft}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
