import { useState } from 'react';
import Modal_36 from '../components/Modal_36';
import React from 'react'
import Backdrop_36 from '../components/Backdrop_36';

function Todo_36(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);

  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>Delete</button>
        </div>
      </div>
      {showModal && <Backdrop_36 onClose={closeModalHandler} />}
      {showModal && <Modal_36 text='Are you sure?' onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo_36;
