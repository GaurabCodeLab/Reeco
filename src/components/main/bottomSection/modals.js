import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { X, Check2 } from "react-bootstrap-icons";

function PopUp({ name }) {
  const [show, setShow] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [missing, setMissing] = useState(false);
  const [approved, setApproved] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleUrgent() {
    setShow(false);
    setUrgent(true);
    setMissing(false);
    setApproved(false);
  }
  function handleMissing() {
    setShow(false);
    setUrgent(false);
    setMissing(true);
    setApproved(false);
  }
  function handleCheck() {
    setApproved(!approved);
    setMissing(false);
    setUrgent(false);
  }

  return (
    <>
      <span className="ps-3">
        {approved ? (
          <Button variant="success" size="sm">
            Approved
          </Button>
        ) : null}
        {urgent ? (
          <Button variant="danger">
            Missing-Urgent
          </Button>
        ) : null}

        {missing ? (
          <Button variant="warning">
            Missing
          </Button>
        ) : null}
      </span>
      <span className="float-end pe-3">
        <Check2
          class="fs-1"
          onClick={handleCheck}
          style={
            approved
              ? { cursor: "pointer", color: "green" }
              : { cursor: "pointer" }
          }
        />

        <X
          onClick={handleShow}
          style={
            urgent
              ? { cursor: "pointer", fontSize: "40px", color: "red" }
              : missing
              ? { cursor: "pointer", fontSize: "40px", color: "lightcoral" }
              : { cursor: "pointer", fontSize: "40px" }
          }
        />
        <span>Edit</span>
      </span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Missing Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Is "{name}" urgent?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMissing}>
            No
          </Button>
          <Button variant="danger" onClick={handleUrgent}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
