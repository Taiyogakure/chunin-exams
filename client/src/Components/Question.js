import React from 'react';
import './Test.scss';

    let Question = function statelessFunctionComponentClass(props) {
    return(
        <div>
            <p>
                {props.keyy}
                {props.source}
                {props.options}
            </p>
        </div>
    );
    }
export default Question;