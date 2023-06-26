import React, { useState } from 'react';
import './Radio.css';
import NewPopup from './NewPopup';
import './NewPopup.css';


const Radio1 = (props) => {
  const [showNewPopup, setShowNewPopup] = useState(false);

  const handleGoBack = () => {
    props.handleGoBack();
  };

  const handleCreateNew = () => {
    setShowNewPopup(true);
  };

  const closeNewPopup = () => {
    setShowNewPopup(false);
  };

  return (
    <div>
      <div className="heading">
        <button className="symbols" onClick={handleGoBack}>
          <img src='Vector 266 (Stroke).png' ></img>
        </button>
        <img id='icon' src="t.png" alt="" />
        <div className='title'>
          <h2>{props.boardName}</h2>
        </div>
        <div className='icons-container'>
          <img id='icons' src="Union (1).png" alt="" />
          <img id='icons' src="Rectangle 368.png" alt="" />
          <img id='icons' src="Rectangle 303 (Stroke).png" alt="" />
        </div>
      </div>

      <div className='layout'>
        <h1>Your Posts</h1>
        <button id='new' className='button' onClick={handleCreateNew}> + Create New Post</button>
      </div>

      <div id="content">
        <img src='/Content.png'></img>
        <h1>Nothing here yet</h1>
        <p id='last' >Create your first post by clicking on the '+' button above</p>

      </div>



      {showNewPopup && (
        <div className="popup-center" >
          <div id='posp' className="popup-inner" >

            <h2 className='add' >Create a Post</h2>
            <button className='close-btn' onClick={closeNewPopup}>X</button>

            <p id='note' >Write something for your Post</p>
            <h3 id='note1' >Subject</h3>
            <form className='form'> <input className="text" type="text" /></form>

            <form className="form" id="image-insert">
              <img src="img.png" alt="placeholder" />
              <label htmlFor="image" className="file-label">
                Add new image
                <input className="img2" type="file" accept="image/*" id="image" />
              </label>
            </form>

            <img src='line.png' id='line' ></img>
            <h3 id='note3' >What's on your mind?</h3>

            <form className='form' id='all' >  <input id='he' className="text" type="text" placeholder='Type here' /> </form>
            <button className='button' id='publish'>Publish</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Radio1;
