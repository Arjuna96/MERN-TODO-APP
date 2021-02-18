import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import ToastComponent from './ToastComponent';

export default function RegisterComponent() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [show, setShow] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  const isRegistered = (results, usernameValue) => {
    if (results.data.message.includes('Success')) {
      localStorage.setItem('isLogger', true);
      localStorage.setItem('user', usernameValue);
      history.push('/home');
    } else {
      setShow(true);
      setLoginError(results.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameValue) return;

    Axios.post(
      'http://localhost:5000/register',
      {
        username: usernameValue,
        password: passwordValue,
      },
      {}
    )
      .then((result) => {
        setUsernameValue('');
        setPasswordValue('');
        isRegistered(result, usernameValue);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="container">
        <ToastComponent setShow={setShow} show={show} loginError={loginError} comp="Registration" />
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <h1 className="text-center mb-4">Register</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={usernameValue}
                    onChange={(e) => setUsernameValue(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                </Form.Group>

                <br />
                <br />
                <Button variant="primary" type="submit" size="lg" block>
                  Register
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
