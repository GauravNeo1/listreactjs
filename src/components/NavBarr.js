import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'



export default function NavBarr() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
               
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link ><Link to="/" style={{color:"white"}}>Product</Link></Nav.Link>
                        <Nav.Link ><Link to="/course" style={{color:"white"}}>Courses</Link></Nav.Link>
                        <Nav.Link ><Link to="/userenquiry" style={{color:"white"}}>UserEnquiry</Link></Nav.Link>
                        
                        
                    </Nav>
                    </Navbar.Collapse>
               
                </Navbar>
        </div>
    )
}

