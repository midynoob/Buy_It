import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import RightMenu from './right';

 function TopNav(){
   return (
       <div>
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
  <Navbar.Brand href="#home"><img src="./images/logo.png" alt="" responsive/></Navbar.Brand>
  <Nav className="order-first"><Navbar.Toggle aria-controls="basic-navbar-nav" /></Nav>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Men" id="basic-nav-dropdown">
        <NavDropdown.Item href="#categories/Topwear">Topwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Botoomwear">Bottomwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Footwear">Footwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Gadgets">Gadgets</NavDropdown.Item>
        
      </NavDropdown>
    
      <NavDropdown title="Women" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#categories/Topwear">Topwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Botoomwear">Bottomwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Footwear">Footwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Gadgets">Gadgets</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#categories/sale">Sale</NavDropdown.Item>
      </NavDropdown>
    
      <NavDropdown title="Kids" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#categories/Topwear">Topwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Botoomwear">Bottomwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Footwear">Footwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Gadgets">Gadgets</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#categories/sale">Sale</NavDropdown.Item>
      </NavDropdown>
    
      <NavDropdown title="Unisex" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#categories/Topwear">Topwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Botoomwear">Bottomwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Footwear">Footwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Gadgets">Gadgets</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#categories/sale">Sale</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Home & Living" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#categories/Topwear">Topwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Botoomwear">Bottomwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Footwear">Footwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Gadgets">Gadgets</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#categories/sale">Sale</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Offers" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#categories/Topwear">Topwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Botoomwear">Bottomwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Footwear">Footwear</NavDropdown.Item>
        <NavDropdown.Item href="#categories/Gadgets">Gadgets</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#categories/sale">Sale</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="mr-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-1" />
      <Button variant="outline-primary" >Search</Button>
    </Form>
    </Nav>
    {/* <Nav ><Nav.Link href="#login-signup">Login/Signup</Nav.Link></Nav>     */}
    <RightMenu />
  </Navbar.Collapse>
  <Nav className="order-third"><Nav.Link href="#cart"><FaShoppingCart style={{ width: '1.5rem' ,height:'1.5rem'}}/></Nav.Link></Nav>
</Navbar>
</div>
   );
 }
 export default TopNav;