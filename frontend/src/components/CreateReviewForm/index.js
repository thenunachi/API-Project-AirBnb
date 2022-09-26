import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { ReviewForm } from './CreateReview';

function ReviewFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
        <button id="create-review-modal" className="Review-button" onClick={()=>setShowModal(true)}>Create Review</button>
        {
            showModal && (
                <Modal className="ReviewModal" onClose={()=>setShowModal(false)}>
<ReviewForm onCancel={() => setShowModal(false)}/>

                </Modal>
            )
        }
        </>
    )
}
export default ReviewFormModal;