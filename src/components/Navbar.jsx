import React from 'react';
import useDarkMode from '../customHooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    console.log('clicked');
    setDarkMode(darkMode);
  };

  return (
    <nav className='navbar'>
      <h1>CryptoCurrency Tracker</h1>
      <div className='dark-mode-toggle'>
        <div
          onClick = {toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
