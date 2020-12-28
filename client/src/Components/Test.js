import {render} from '@testing-library/react';
import React from 'react';
import './Test.scss';

export default function Test() {
    let ques = fetch("http://localhost:4000/user/Ques", {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("currentUser")
            },
            method: 'get',
        }).then(res => {
            return res
        }).catch(err => {
            return err.json();
        });
    return (
        <body id="exam">
        <header>
            <a href="#" className="logo">Chunin Exam</a>
            <ul>
                <li id="timer">Time Left</li>
                <li>
                    <button type="submit" id="end"><a href="http://localhost:3000/Feedback">End Test</a></button>
                </li>
            </ul>
        </header>
        <div id="quest">
            <div id="lefty">
                <ol>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="">It is a long established fact that a reader will be distracted by the readable
                            content of
                            a page when looking at its layout.</a>
                    </li>
                    <hr></hr>
                </ol>
            </div>
            <div id="righty">
                <p>
                    Full Question
                </p>
                <section id="options">
                    <ul>
                        <li>
                            <button type="radio" className="opt">option 1</button>
                        </li>
                        <li>
                            <button type="radio" className="opt">option 2</button>
                        </li>
                        <li>
                            <button type="radio" className="opt">option 3</button>
                        </li>
                        <li>
                            <button type="radio" className="opt">option 4</button>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <footer id="ver">Version 1.0</footer>
        </body>
    );
}