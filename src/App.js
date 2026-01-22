import React from 'react';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('memoire-notes')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'memoire-notes',
      JSON.stringify(notes)
    );
  }, [notes]);

  const createNote = (content) => {
    const newNote = {
      id: nanoid(),
      content,
      createdAt: new Date().toLocaleDateString(),
      pinned: false
    };

    setNotes((prev) => [...prev, newNote]);
  };

  const removeNoteById = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
  };

  const toggleThemeMode = () => {
    setDarkMode((prev) => !prev);
  };

  const filteredNotes = notes.filter((note) =>
    note.content
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const updateNote = (id, updatedText) => {
  const updatedNotes = notes.map((note) =>
    note.id === id
      ? { ...note, text: updatedText }
      : note
  );

  setNotes(updatedNotes);
};


  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className="container">
        <Header toggleThemeMode={toggleThemeMode} />
        <Search updateSearchQuery={setSearchQuery} />
        <NotesList
          notes={filteredNotes}
          createNote={createNote}
          removeNoteById={removeNoteById}
        />
      </div>
    </div>
  );
};

export default App;
