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
          back
        </button>
        <h2>{props.boardName}</h2>
        <img src="/public/Union.png" alt="" />
      </div>

      <div id="content">
        <h1>Nothing here yet</h1>
        <p>Create your first post by clicking on the '+' button above</p>
        <button onClick={handleCreateNew}>Create New</button>
      </div>

      {showNewPopup && <NewPopup closeNewPopup={closeNewPopup} />}
    </div>
  );
};

export default Radio1;
