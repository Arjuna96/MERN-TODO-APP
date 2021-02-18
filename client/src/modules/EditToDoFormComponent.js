import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Axios from 'axios';

export default function EditToDoFormComponent({ showPopup, handleClose, editTodo, editItem }) {
  const [titleValue, setTitleValue] = useState(editItem?.todo);
  const [descValue, setDescValue] = useState(editItem?.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleValue) return;

    Axios.put(
      'http://localhost:5000/edit/todo/',
      {
        id: editItem._id,
        todo: titleValue,
        description: descValue,
      },
      {}
    )
      .then((result) => {
        handleClose();
        editTodo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={showPopup} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo - {titleValue} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              className="input"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              placeholder="Title"
            />
            <br />
            <Form.Control
              type="text"
              className="input"
              value={descValue}
              onChange={(e) => setDescValue(e.target.value)}
              placeholder="Description"
            />
          </Form.Group>

          <Button variant="primary mb-3" type="submit" size="md" block>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
