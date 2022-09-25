import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { ReviewForm } from './CreateReview';

function ReviewFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
        <button id="create-review-modal" onClick={()=>setShowModal(true)}>Create Review</button>
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