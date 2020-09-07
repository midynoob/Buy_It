import React, { Component } from 'react';
import { registerUser } from '../../actions/user_actions';
import { connect } from 'react-redux';

class Register extends Component {


    state = {
        firstname: "",
        lastname:"",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    displayErrors = errors =>
        errors.map ((error, i) => <p key={i}>{error}</p>)

    isFormValid = () => {
        let errors = [];
        let error;

        if(this.isFormEmpty(this.state)) {
            error = {message: "Fill in all Fields"};
            this.setState({errors: errors.concat(error.message) });
        }else if(!this.isPasswordValid(this.state)) {
            error = { message: "Password is invalid"};
            this.setState({ errors: errors.concat(error.message) });
        }else { 
            return true;
        }



    }

    isPasswordValid = ({ password, passwordConfirmation }) => {
        if(password.length < 6 || passwordConfirmation.length < 6){
            return false;
        }else if ( password != passwordConfirmation){
            return false;
        }else {
            return true;
        }
    }

    isFormEmpty = ({ lastname, firstname, email , password, passwordConfirmation }) => {
        return (
            !firstname.length ||
            !lastname.length ||
            !email.length ||
            !password ||
            !passwordConfirmation.length
        );
    }

    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = {
            email:this.state.email,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            password:this.state.password,
            passwordConfirmation:this.state.passwordConfirmation
        }
        if(this.isFormValid()){
            this.setState({ errors: [] })
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response => {
                if(response.payload.success){
                    this.props.history.push("/login")
                }else {
                    this.setState({
                        errors: this.setState.errors.concat("Your Data Was Not Registerd Plz Try Again")
                    })

                }
            })
            .catch(err => {
                this.setState({
                    errors: this.state.errors.concat(err)
                });
            })
        }else {
            console.error("FOrm IS Not Valild");
        }
    }

    render() {
        return (
            <div className="container">
                <h2>SignUp</h2>
                <div className="row">
                    <form className="col s12" onSubmit={event => this.submitForm(EventSource)} >

                    <div className="row">
                            <div className="input-field col s12">
                                <input name="firstname"
                                    value={this.state.firstname}
                                    onChange={e => this.handleChange(e)}
                                    id="firstname"
                                    type="text"
                                    className="validate"

                                    />
                                <label className="active" htmlFor="firstname">Firstname</label>
                                <span
                                    className="helper-text"
                                    data-error="Type a right type firstname"
                                    data-success="right"
                                    />
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input name="lastname"
                                    value={this.state.lastname}
                                    onChange={e => this.handleChange(e)}
                                    id="lastname"
                                    type="text"
                                    className="validate"

                                    />
                                <label className="active" htmlFor="lastname">Lastname</label>
                                <span
                                    className="helper-text"
                                    data-error="Type a right type lastname"
                                    data-success="right"
                                    />
                            </div>
                            
                        </div>


                        <div className="row">
                            <div className="input-field col s12">
                                <input name="email"
                                    value={this.state.email}
                                    onChange={e => this.handleChange(e)}
                                    id="email"
                                    type="email"
                                    className="validate"

                                    />
                                <label className="active" htmlFor="email">Email</label>
                                <span
                                    className="helper-text"
                                    data-error="Type a right type email"
                                    data-success="right"
                                    />
                            </div>
                            
                        </div>


                        <div className="row">
                            <div className="input-field col s12">
                                <input name="password"
                                    value={this.state.password}
                                    onChange={e => this.handleChange(e)}
                                    id="password"
                                    type="password"
                                    className="validate"

                                    />
                                <label className="active" htmlFor="password">Password</label>
                                <span
                                    className="helper-text"
                                    data-error="wrong"
                                    data-success="right"
                                    />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input name="passwordConfirmation"
                                    value={this.state.passwordConfirmation}
                                    onChange={e => this.handleChange(e)}
                                    id="passwordConfirmation"
                                    type="password"
                                    className="validate"

                                    />
                                <label className="active" htmlFor="PasswordConfirmation">Password Confirmation</label>
                                <span
                                    className="helper-text"
                                    data-error="wrong"
                                    data-success="right"
                                    />
                            </div>
                        </div>


                        {this.state.errors.length > 0 && (
                            <div>
                                {this.displayErrors(this.state.errors)}
                            </div>
                        )}

                        <div className="row">
                            <div className="col s6">
                                
                                <button
                                    className="btn waves-effect red "
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}
                                >
                                    Create an Account
                                </button>
                                

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(Register);