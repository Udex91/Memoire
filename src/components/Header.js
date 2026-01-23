import React from 'react';
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <div>
        <h1>Memoire</h1>
        <p className="subtitle">Your personal space for ideas</p>
      </div>

      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((prev) => !prev)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
