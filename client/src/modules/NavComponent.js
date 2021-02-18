import React, { useEffect, useState } from 'react';
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

export default function NavComponent() {
  const [currentUser, setcurrentUser] = useState();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setcurrentUser(localStorage.getItem('user'));
    } else {
      history.push('/login');
    }
  }, [currentUser]);

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">ToDo App </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/history">History</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home">{currentUser}</Nav.Link>
              <Button variant="outline-primary" onClick={logout}>
                Log Out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
