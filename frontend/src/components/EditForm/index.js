import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpotForm from './EditFormSpot';

function EditFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
        <button onClick={()=>setShowModal(true)}></button>
        {
            showModal && (
                <Modal onClose={()=>setShowModal(false)}>
<EditSpotForm />

                </Modal>
            )
        }
        </>
    )
}
export default EditFormModal;