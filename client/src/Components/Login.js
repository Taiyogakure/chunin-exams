import React from 'react';
import './forms.scss';

export default class Login extends React.Component {
    state = {
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
        console.log(this.state);
        this.setState({
            email: '',
            password: ''
        })
    }

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
                        <img src="https://images-ext-1.discordapp.net/external/rAWS22Xz6LpUjSLZGBTSphgloqH2sLMcBImTX8tXQ9Q/https/miro.medium.com/max/875/1%2AhQR3_tCL_phZgIK80wnOcA.gif?width=659&height=494" alt="side-pic" />
                    </div>
                </div>
            </body>
        )
    }
}