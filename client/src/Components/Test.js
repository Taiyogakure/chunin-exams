import {render} from '@testing-library/react';
import React from 'react';
import Question from "./Question";
import './Test.scss';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

export default function Test() {
    let obj = {result:[{qid:1,question:'what is your name?',testcase:['A','B','C','D']},{qid:2,question:'what is y name?',testcase:['A','B','C','D']},{qid:3,question:'what is yo name?',testcase:['A','B','C','D']},{qid:4,question:'what is you name?',testcase:['A','B','C','D']},{qid:5,question:'what is your name?',testcase:['A','B','C','D']},{qid:6,question:'what is our name?',testcase:['A','B','C','D']},{qid:7,question:'what is hour name?',testcase:['A','B','C','D']}]}
    let match = useRouteMatch();

    return (
        <body id="exam">
            <header>
                <div className="logo">Chunin Exam</div>
                <ul>
                    <li>
                        <a className="timer">
                            Time Left
                        </a>
                        <a href="http://localhost:3000/Feedback" className="end">
                            End Test
                        </a>
                    </li>
                </ul>
            </header>
            <div className="quest">
                <div id="lefty">
                    <p>MCQs</p>
                    <ul>
                    {obj.result.map(ele => 
                        <li>
                            <Link to={`${match.url}/${ele.qid}`}>{ele.qid}</Link>
                        </li>)
                    }
                    </ul>
                </div>
                <Switch>
                    {obj.result.map(ele => 
                    (<Route path={`${match.url}/${ele.qid}`} exact>
                    <Question source={ele.question} keyy={ele.qid} options={ele.testcase}/></Route>
                    ))}
                </Switch>
            </div>
            <footer id="ver">Version 1.0</footer>
        </body>
    );
}