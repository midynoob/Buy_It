import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {Button, Nav, Badge} from 'react-bootstrap';
import { FaCaretSquareUp } from 'react-icons/fa';


import {FaShoppingCart} from 'react-icons/fa'

function RightMenu(props) {
  const user = useSelector(state => state.user)


  
  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };



  if (user.userData && !user.userData.isAuth) {
    return (
        <Nav >
            <Link to="/login">
                <Button variant="outline-primary" type="submit">
                Login/Signup
                </Button>
            </Link>
        </Nav> 
    )
  } else{
    
    return (
        <Nav >
            
            <Nav.Link >
                <Link to="/product/upload">
                    <FaCaretSquareUp style={{ width: '1.5rem' ,height:'1.5rem'}}/>
                </Link>
            </Nav.Link>
            
            
            <Button variant="outline-primary" type="submit" onClick={logoutHandler}>
                Logout
            </Button>
            &nbsp;
            <Link to="/user/history">
              <Button variant="outline-primary">
                  History
              </Button>
            </Link>
            &nbsp;
            <Link to="/">
              <Button variant="outline-primary">
                  MHome
              </Button>
            </Link>
            &nbsp;
            <Button variant="outline-primary">
              <Link to="/user/cart">
                <FaShoppingCart style={{ width: '1.5rem' ,height:'1.5rem'}}/>
                &nbsp;
                <Badge variant="light">{user.userData && user.userData.cart.length}</Badge>
              </Link>
            </Button>
              
            
            
        </Nav> 
    )
  }
}

export default RightMenu;

