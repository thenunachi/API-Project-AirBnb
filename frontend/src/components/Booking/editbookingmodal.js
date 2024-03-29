import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './editBookingForm'
import './editbookingmodal.css'

function EditBookingModal({booking}){
    const [showModal,setShowModal] = useState(false);
    return(
        <>
        <button className="editbooking" onClick={()=>setShowModal(true)}>Edit Booking</button>
        {
            showModal && (
                <Modal onClose={()=>setShowModal(false)}>
<EditBookingForm booking={booking} closeForm={()=>setShowModal(false)}/>

                </Modal>
            )
        }
        
        </>
    )
}
export default EditBookingModal;