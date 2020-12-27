import React from 'react';
import './forms.scss';
import { authservice } from '../authservice';

export default class SignUp extends React.Component {
    state = {
        rollno: '',
        email: '',
        password: ''
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        authservice.signup(this.state);
        this.props.history.push("/Components/Test");
    };

    render() {
        return (
            <body id="auth">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <p>Sign Up to become Chunin</p>
                            <input name="rollno" type="text"
                                placeholder="Roll Number"
                                value={this.state.rollno}
                                onChange={e => this.change(e)}
                                required/>
                            <input name="email" type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={e => this.change(e)}
                                required/>
                            <input name="password" type="password" placeholder="Password"
                                value={this.state.password}
                                onChange={e => this.change(e)}
                                required/>
                            <button type="submit" onClick={e => this.onSubmit(e)}>Sign Up</button>
                        </form>
                    </div>
                    <div className="pic-container">
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff6fad95104341.5e938b2c0c23c.gif"
                            alt="side-pic"/>
                    </div>
                </div>
            </body>
        )
    }
}