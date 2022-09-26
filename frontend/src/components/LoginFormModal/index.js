// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './loginForm.css'
function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <a href="#" onClick={() => setShowModal(true)}> 
      <span className='navbox-menu' > Log In </span>
      {/* <button id="Modal-login" onClick={() => setShowModal(true)}>Log In</button> */}
      {showModal && (
         <Modal onClose={(e) => {
          setShowModal(false);
          e.stopPropagation();
        }}>
          <LoginForm />
        </Modal>
      )}
    </a>
  );
}

export default LoginFormModal;