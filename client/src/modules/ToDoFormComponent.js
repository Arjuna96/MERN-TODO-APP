import React, { useEffect, useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

export default function ToDoFormComponent({ addTodo }) {
  const [titleValue, setTitleValue] = useState('');
  const [descValue, setDescValue] = useState('');

  const [currentUser, setcurrentUser] = useState();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setcurrentUser(localStorage.getItem('user'));
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleValue) return;

    Axios.post(
      'http://localhost:5000/add/todo',
      {
        title: titleValue,
        description: descValue,
        isDone: false,
        user: currentUser,
      },
      {}
    )
      .then((result) => {
        addTodo(result);
        setTitleValue('');
        setDescValue('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>
                <b>Add Todo</b>
              </Form.Label>
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
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
