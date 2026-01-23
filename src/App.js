import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Load notes
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('memoire-notes')
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes
  useEffect(() => {
    localStorage.setItem(
      'memoire-notes',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text,
      date: new Date().toLocaleDateString(),
      pinned: false,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedText) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, text: updatedText } : note
      )
    );
  };

  const togglePinNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, pinned: !note.pinned }
          : note
      )
    );
  };

  const filteredNotes = notes
    .filter((note) =>
      note.text.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => b.pinned - a.pinned);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={filteredNotes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleUpdateNote={updateNote}
          handleTogglePin={togglePinNote}
        />
      </div>
    </div>
  );
};

export default App;
