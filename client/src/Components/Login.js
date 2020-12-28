import React from 'react';
import './forms.scss';
import { authservice } from '../authservice';

export default class Login extends React.Component {
    state = {
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
        authservice.login(this.state);
        this.props.history.push("/Test");
    };

    render() {
        return(
            <body id="auth">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Chunin Exam</h1>
                            <p>Login You Genin</p>
                            <input name="email" type="email" 
                            placeholder="Email" 
                            value={this.state.email} 
                            onChange={e => this.change(e)}
                            required />
                            <input name="password" type="password" placeholder="Password" 
                            value={this.state.password} 
                            onChange={e => this.change(e)}
                            required />
                            <button type="submit" onClick={e => this.onSubmit(e)}>Login</button>
                        </form>
                    </div>
                    <div className="pic-container">
                        <img src="https://media.discordapp.net/attachments/781865722091405313/791734477927219210/render_dribbble_3_1_1.gif" alt="side-pic" />
                    </div>
                </div>
            </body>
        )
    }
}