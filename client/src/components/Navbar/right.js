/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {Button, Nav, Form } from 'react-bootstrap';

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
  console.log(user.userData);
  console.log("hello");
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
  } else {
    return (
        <Nav >
                <Button variant="outline-primary" type="submit" onClick={logoutHandler}>
                    Logout
                </Button>
            
        </Nav> 
    )
  }
}

export default withRouter(RightMenu);
