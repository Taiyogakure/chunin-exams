import React from 'react';
import './Question.scss';
import { Route } from 'react-router-dom';

    let Question = function statelessFunctionComponentClass(props) {
    return(
        <Route className="abc">
                
            <div id="righty">
                <div className="qno">
                    {props.keyy}. {props.source}
                </div>
                    {props.options.map(ele =>
                    <button type="radio" className="opt">{ele}</button>)}
            </div>
        <footer id="ver">Version 1.0</footer>
        </Route>
    );
    }
export default Question;