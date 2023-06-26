import React, { useState } from 'react';
import './Addnew.css';
import Radio1 from './Radio1';

const Addnew = (props) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [showRadio1Page, setShowRadio1Page] = useState(false);
  const [boardName, setBoardName] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleInputChange = (event) => {
    setBoardName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.documentElement.style.backgroundColor = selectedColor;
    setShowRadio1Page(true);
  };

  const handleClose = () => {
    props.setTrigger(false);
  };

  const radioPopupStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw', 
    height: '', 
    backgroundColor: selectedColor, 
    borderRadius: '8px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const handleGoBack = () => {
    document.documentElement.style.backgroundColor = '';
    setSelectedColor('');
    setShowRadio1Page(false);
  };

  return (
    <div>
      {props.trigger && (
        <div className="popup" id="popup">
          <div className="popup-inner">
            <h2 className="add">Add a name for your board</h2>
            <button type="button" className="close-btn" onClick={handleClose}>
              X
            </button>
            <form className="form">
              <input className="text" type="text" value={boardName} onChange={handleInputChange} />
            </form>
            <div>
              <h2>Select post colour</h2>
              <p className="down">Here are some templates to help you get started</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="red">
                <input
                  className="radios"
                  type="radio"
                  id="red"
                  value="#CAF8FF"
                  checked={selectedColor === '#CAF8FF'}
                  onChange={handleColorChange}
                  
                />
                <img src='Ellipse 1.png' ></img>
              </label>
              <label htmlFor="green">
                <input
                  className="radios"
                  type="radio"
                  id="green"
                  value="#C5C5FC"
                  checked={selectedColor === '#C5C5FC'}
                  onChange={handleColorChange}
                />
                <img src='Ellipse 2.png' ></img>
              </label>
              <label htmlFor="blue">
                <input
                  className="radios"
                  type="radio"
                  id="blue"
                  value="#FFAEC0"
                  checked={selectedColor === '#FFAEC0'}
                  onChange={handleColorChange}
                />
                <img src='Ellipse 3.png' ></img>
              </label>
              <label htmlFor="yellow">
                <input
                  className="radios"
                  type="radio"
                  id="yellow"
                  value="#FFCC66"
                  checked={selectedColor === '#FFCC66'}
                  onChange={handleColorChange}
                />
                <img src='Ellipse 4.png' ></img>
              </label>
              <div className="createbutton">
                <button type="submit" className="button" id="create">
                  Create board
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showRadio1Page && (
        <div className="popup" id="radio-popup" style={radioPopupStyle}>
          <Radio1 backgroundColor={selectedColor} boardName={boardName} handleGoBack={handleGoBack} />
        </div>
      )}
    </div>
  );
};

export default Addnew;
