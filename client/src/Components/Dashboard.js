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
            <div className="side-nav">
                <a href="#leaderboard">LeaderBoard</a>
                <a href="#Q">Questions</a>
            </div>
            <section className="conts">

            </section>
            <footer id="ver">Version 1.0</footer>
        </body>
    )
}
