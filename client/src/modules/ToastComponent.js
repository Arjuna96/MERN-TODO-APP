import React from 'react';
import { Button, Form, Toast, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ToastComponent({ setShow, show, loginError, comp }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        minHeight: '200px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">{comp} Error</strong>
          </Toast.Header>
          <Toast.Body>{loginError}!</Toast.Body>
        </Toast>
      </div>
    </div>
  );
}
