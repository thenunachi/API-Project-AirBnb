import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpotForm from './EditFormSpot';

function EditFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id="edit-spot-modal" className="Edit-button" onClick={() => setShowModal(true)}>Update Spot
            </button>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}
                    className="editshowmodel">
                        <EditSpotForm closeForm={() => setShowModal(false)} />

                    </Modal>
                )
            }
        </>
    )
}
export default EditFormModal;