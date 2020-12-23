import React from 'react';
import './forms.scss';

export default class SignUp extends React.Component {
    state = {
        rollno: '',
        email: '',
        password: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
        fetch("http://localhost:4000/user/signup", {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'post',
            body: JSON.stringify(this.state),
        }).then(res => {
            console.log(res);
            return res.json()
        }).catch(err =>
            console.log(err)
        );
        this.setState({
            rollno: '',
            email: '',
            password: ''
        })
    }

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
                        src="https://images.unsplash.com/photo-1488381397757-59d6261610f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fG1vdGl2YXRpb25hbHxlbnwwfDF8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt="side-pic"/>
                </div>
            </div>
            </body>
        )
    }
}