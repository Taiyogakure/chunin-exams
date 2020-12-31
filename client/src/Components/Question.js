import React from 'react';
import './Question.scss';
import { Route } from 'react-router-dom';

    let Question = function statelessFunctionComponentClass(props) {
    return(
        <Route>
            <div className="righty">
                <div className="qno">
                    {props.keyy}. {props.source}
                </div>
                    {props.options.map(ele =>
                    <button type="radio" className="opt">{ele}</button>)}
            </div>
        </Route>
    );
    }
export default Question;