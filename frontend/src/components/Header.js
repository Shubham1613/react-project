import React from 'react'
import { Navbar, Nav, Container, Row  } from 'react-bootstrap'


function Header() {
  return (
    <header>
	  <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
		<Container>
		  <Navbar.Brand href="#">Yog Ganga</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">

			  <Nav.Link href="/home">Home</Nav.Link>
			  <Nav.Link href="/login">Login</Nav.Link>

			</Nav>
		  </Navbar.Collapse>
		</Container>
	  </Navbar>
    </header>
  )
}

export default Header
