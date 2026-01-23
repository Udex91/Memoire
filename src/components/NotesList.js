import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleUpdateNote,
  handleTogglePin,
}) => {
  if (notes.length === 0) {
    return (
      <div className="notes-list">
        <AddNote createNote={handleAddNote} />
        <div className="empty-state">
          <p>No memoires yet.</p>
          <p>
    Start by writing one{' '}
    <span role="img" aria-label="writing hand">
    ✍️
    </span>
    </p>

        </div>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          pinned={note.pinned}
          handleDeleteNote={handleDeleteNote}
          handleUpdateNote={handleUpdateNote}
          handleTogglePin={handleTogglePin}
        />
      ))}

      <AddNote createNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
