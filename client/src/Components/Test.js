import {render} from '@testing-library/react';
import React from 'react';
import Question from "./Question";
import './Test.scss';

export default function Test() {
    let obj = {result:[{qid:1,question:'what is your name?',testcase:['A','B','C','D']},{qid:1,question:'what is your name?',testcase:['A','B','C','D']},{qid:1,question:'what is your name?',testcase:['A','B','C','D']},{qid:1,question:'what is your name?',testcase:['A','B','C','D']},{qid:1,question:'what is your name?',testcase:['A','B','C','D']},{qid:1,question:'what is your name?',testcase:['A','B','C','D']},{qid:1,question:'what is your name?',testcase:['A','B','C','D']}]}
    const QUES = ["flana", "ooh", "yeessss", "god"];
    console.log(obj);
    console.log(obj.result);
    return (
        obj.result.map(ele => (
            <Question source={ele.question} keyy={ele.qid} options={ele.testcase} />
        ))
    );
}