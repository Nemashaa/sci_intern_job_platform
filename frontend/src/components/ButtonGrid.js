import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAfterLogStaff from './HeaderAfterLogStaff';

function ButtonGrid() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // Function to handle button click
  const handleButtonClick = (content) => {
    setModalContent(content);  // Set the content of the modal based on the button clicked
    setShowModal(true);  // Show the modal
  };

  // Function to handle closing of the modal
  const handleClose = () => setShowModal(false);

  return (
    <div className="ButtonGrid">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <Button 
            variant="primary" 
            className="w-100" 
            onClick={() => handleButtonClick('You clicked Button 1!')}
          >
            Button 1
          </Button>
        </div>
        <div className="col mb-4">
          <Button 
            variant="secondary" 
            className="w-100" 
            onClick={() => handleButtonClick('You clicked Button 2!')}
          >
            Button 2
          </Button>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Button Clicked</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ButtonGrid;
