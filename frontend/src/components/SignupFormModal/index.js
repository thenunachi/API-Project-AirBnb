import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from './SignupForm.js';
import './SignupForm.css'
function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <a href="#" onClick={() => setShowModal(true)}>

      <span className="navbox-menu" > Sign Up </span>

      {/* <button id="Modal-signup" onClick={() => setShowModal(true)}>Sign Up</button> */}
      {showModal && (
        <Modal onClose={(e) => {
          setShowModal(false);
          e.stopPropagation();
        }}>
          <SignupFormPage />
        </Modal>
      )}
    </a>
  );
}

export default SignUpFormModal;