// frontend/src/components/Navigation/index.js
import {React, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal'
import DemoUser from '../Demo/index.js'
import './Navigation.css';
import CreateSpotForm from '../CreateSpotForm/CreateFormSpots'
import logo from './tbnb.png'




function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  const [shouldShowDropDown, setShouldShowDropDown] = useState(false);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
  
        {/* <LoginFormModal /> */}
        {/* <SignUpFormModal/> */}
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

//   const handleOtherClick =  (e) => {
//     e.preventDefault();  
//     // setShouldShowDropDown(false);
//   }
// const handleclick = (e)=>{
//   e.preventDefault();
//   e.stopPropagation();
//   console.log("THIS WAS CLICKED")
//   setShouldShowDropDown(!shouldShowDropDown);
// }
  return (

      <header>
        
      {/* <div onClick={handleOtherClick} className="header-div"> */}
      <div  className="header-div">
{/* <div><img className='Logo' src={'https://i.pinimg.com/736x/7f/b7/2d/7fb72d49a58ce11c03b24c9e81f85961.jpg'}/></div> */}
<div className="name"><img  className="t-logo" src={logo}/></div>
<div className="dropdown" >
{/* <button class="ProfileButton" onClick={handleclick}> */}
<button class="ProfileButton" >
  <i class="fa-solid fa-bars"></i>
<i className="fas fa-user-circle" />
{/* <ProfileButton/> */}
</button>
  {/* <div class="dropdown-content">
    <a href="#"> <LoginFormModal /></a>
    <a href="#"> <SignUpFormModal/></a>
    <div><NavLink to="/new">
          <button id="createspot-button"> Create Spot </button></NavLink>
        </div>
  </div> */}
  <div class="dropdown-content">
    {!sessionUser && 
    
    <div>
      <a href="#"> <LoginFormModal /></a>
    <a href="#"> <SignUpFormModal/></a>
      
    </div>
    }
{sessionUser && 
  <div><NavLink to="/new">
          <button id="createspot-button"> Create Spot </button></NavLink>
       
<button id="logout-button"> Log out </button> </div>
}
  
  </div>

</div>
      </div>     
        {/* <NavLink exact to="/">Home</NavLink> */}
        {isLoaded && sessionLinks}
      </header>
    // </ul>
  );
}

export default Navigation;