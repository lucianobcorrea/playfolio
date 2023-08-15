import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export function ConfirmModal({ children, button, confirmButtonText, onClick }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {React.cloneElement(button, { onClick: handleShow })}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className="container-flex">{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={onClick} variant="danger">
            {confirmButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
