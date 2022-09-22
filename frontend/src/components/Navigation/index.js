// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';

import './Navigation.css';
import CreateSpotForm from '../CreateSpotForm/CreateFormSpots'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
  
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <header>
      
      
                    <img className='Logo' src={'https://i.pinimg.com/736x/7f/b7/2d/7fb72d49a58ce11c03b24c9e81f85961.jpg'}/>
                    
                
       
     
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
        
        <div><NavLink to="/new">
          <button> Create Spot </button></NavLink>
        </div>
        {/* <div><NavLink to="/edit">
          <button> Edit Spot </button></NavLink>
        </div> */}
      
        
      </header>
{/* <hr>ggggggggggggggggggggggggggggggggggggggggggggggggg</hr> */}
    </ul>
  );
}

export default Navigation;