import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="NETFLIX"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="AVATAR"
      />
    </div>
  );
}

export default Navbar;