import React, { useState } from 'react';
import './Dashboard.css';

const Card = ({ cardId, title, imageSrc, onDelete, onEdit }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionsToggle = () => {
    setShowOptions(!showOptions);
  };

  const handleDelete = () => {
    onDelete(cardId);
  };

  const handleEdit = () => {
    onEdit(cardId);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <div className="card-image">
            <img className='tag' src={imageSrc} alt="Card Image" />
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      <div className="card-options">
        <div className="dropdown">
          <div className="dots" onClick={handleOptionsToggle}>
            <img src='Union (2).png' alt="Options" />
          </div>
          {showOptions && (
            <div className="dropdown-content">
              <div className='delete' onClick={handleDelete}>Delete</div>
              <div onClick={handleEdit}>Edit</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Earth changes and Journeys', imageSrc: 'https://www.colorcombos.com/images/colors/C5EAFA.png' },
    { id: 2, title: 'Eating right', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdSeWn24bw_Mydn19vdIKjb0TqJugYaLDUw&usqp=CAU' }
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteCard = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const handleEditCard = (cardId) => {
    const updatedTitle = prompt(`Enter new title for card ${cardId}`);
    if (updatedTitle) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === cardId ? { ...card, title: updatedTitle } : card
        )
      );
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="dashboard">
      <h1 className='name3'>My Boards</h1>
      <div className='cards-container'>
        {cards.map((card) => (
          <Card
            key={card.id}
            cardId={card.id}
            title={card.title}
            imageSrc={card.imageSrc}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
          />
        ))}
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            {/* Add your popup content here */}
            <h3>Popup Content</h3>
            <button onClick={handleClosePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
