import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar =()=>{
return(
<div className='navBar'>
<Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><h3>BERGAMO38</h3></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/about"><h5>About</h5></Nav.Link>
            <Nav.Link href="/service"><h5>Services </h5></Nav.Link>
            <Nav.Link href="/attractions"><h5>Attractions </h5></Nav.Link>
            <Nav.Link href="/book"><h5>Book & info</h5></Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>





</div>)
}


export default NavBar