import React from 'react';

const Header = ({ toggleThemeMode }) => {
  return (
    <div className="header">
      <h1>Memoire</h1>
      <p className="subtitle">Your personal space for ideas</p>
      <button className="save" onClick={toggleThemeMode}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
