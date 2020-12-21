import { render } from '@testing-library/react';
import React from 'react';
import './Test.scss';

export default function Test() {
    return(
        <body id="dash">
            <nav id="header">
                <div id="header-nav">
                    <div id="logo">
                        Chunin Exam
                    </div>
                    <button id="end">End Test</button>
                </div>
            </nav>
            <div id="quest">
                <div id="lefty">
                    <ol>
                        <a>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </a>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                        <li>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </li>
                    </ol>
                </div>
                <div id="righty">
                    <p>
                        Full Question
                    </p>
                </div>
            </div>
            <footer id="ver">Version 1.0</footer>
        </body>
    );
}