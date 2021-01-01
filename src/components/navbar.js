import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">E-Ticketing Platform</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">About Us</Nav.Link>
                                    <Nav.Link href="/about-us">Platforms we Service</Nav.Link>
                                    <Nav.Link href="/about-us">Prices List</Nav.Link>
                                    <Nav.Link href="/contact-us">Food Service inside Bus</Nav.Link>
                                    <NavDropdown title="More" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Team</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Social Media Handle</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Contact US</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Share your review" className="mr-sm-2" />
                                    <Button variant="outline-success">Submit</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    
                                </Route>
                                <Route path="/about-us">
                                   
                                </Route>
                                <Route path="/contact-us">
                                   
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;