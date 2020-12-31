import React from 'react';
import './forms.scss';
import {authservice} from '../authservice';

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

    onSubmit = async (e) => {
        e.preventDefault();
        let res = await authservice.signup(this.state);
        if (res.status === 200)
            this.props.history.push("/Test");
        else
            console.log(res.status);
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
                               onChange={e => this.change(e)}/>

                        <input name="email" type="email"
                               placeholder="Email"
                               value={this.state.email}
                               onChange={e => this.change(e)}/>

                        <input name="password" type="password" placeholder="Password"
                               value={this.state.password}
                               onChange={e => this.change(e)}/><i class="fa fa-eye password-icon" id="passs"></i>
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