import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { ReviewForm } from './CreateReview';

function ReviewFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
        <button onClick={()=>setShowModal(true)}></button>
        {
            showModal && (
                <Modal className="ReviewModal" onClose={()=>setShowModal(false)}>
<ReviewForm />

                </Modal>
            )
        }
        </>
    )
}
export default ReviewFormModal;