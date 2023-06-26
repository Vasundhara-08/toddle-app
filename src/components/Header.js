import React, { useState } from 'react';
import Addnew from './Addnew';
import './Header.css';


function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <header className="head">
      <ul className="ul">
        <li className="dot">
          <div className="combined">
            <img className="img" src="Frame 4194.png"/>
          </div>
        </li>

        <li className="dot">
          <form className='form1'>
          <img src='./Union (1).png'></img>
            <input id='search' type="text" placeholder="Search.." name="search" />
              
          </form>
        </li>

        <li className="dot">
          <button id='new-board' type="button" className="button" onClick={() => setButtonPopup(true)}>
            + Create new board
          </button>
          <Addnew trigger={buttonPopup} setTrigger={setButtonPopup}>
           
          </Addnew>
        </li>
      </ul>
    </header>
  );
}

export default Header;
