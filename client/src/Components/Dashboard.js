import React from 'react';
import './Dashboard.scss';

export default function Dashboard() {
    return(
        <body id="dash">
            <header>
                <a href="#" className="logo">Chunin Exam</a>
                <ul>
                    <li><button type="submit" id="logout"><a href="#">Logout</a></button></li>
                </ul>
            </header>
            <section className="conts">
                <div className="side-nav">
                    <a href="#leaderboard">LeaderBoard</a>
                    <a href="#Q">Questions</a>
                </div>
                <div className="table">
                    <img src="https://images.unsplash.com/photo-1608869984089-85a581648a72?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="lead-pic"/>
                </div>
            </section>
            <footer id="ver">Version 1.0</footer>
        </body>
    )
}
