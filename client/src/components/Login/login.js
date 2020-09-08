import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../../actions/user_actions';
import { Link } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';


class Login extends Component {

    state = {
        email: "",
        password: "",
        errors: []
    };

    displayErrors = errors =>
        errors.map ((error, i) => <p key={i}>{error}</p>)

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitForm = event => {
        event.preventDefault();
        let dataToSubmit = {
            email : this.state.email,
            password: this.state.password
        };

        if(this.isFormvalid(this.state)){
            this.setState({errors: []})
                this.props.dispatch(loginUser(dataToSubmit))
                .then(response => {
                    if(response.payload.loginSuccess){
                        this.props.history.push('/')
                    }else {
                        this.setState({
                            errors: this.state.errors.concat(
                                "Failed To Login, Please Check Your Email OR Password "
                            )
                        })
                    }
                })


        }else {
            this.setState({
                errors: this.state.errors.concat('Form Is NOt valid')
            })
        }
    }


    isFormvalid = ({email, password}) => email && password;









    render() {
        return (
            <div className="container">
                <h2>Login</h2>
                <div className="row">
                   
                    <Form onSubmit={event => this.submitForm(event)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email"
                                onChange={e => this.handleChange(e)}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" 

                                onChange={e => this.handleChange(e)}/>
                        </Form.Group>
                        
                        {this.state.errors.length > 0 && (
                            <div>
                                {this.displayErrors(this.state.errors)}
                            </div>
                        )}

                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Link to='/register'>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Link>

                    </Form>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(Login);








