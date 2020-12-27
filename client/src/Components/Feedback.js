import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Feedback.scss';
import authservice from '../authservice';

export default function Feedback() {
    const [state, setState] = useState({
        stars: 0,
        ux: "",
        Qlevel: "",
        sugg: ""
    });

    var change = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    var onSubmit = (e) => {
        e.preventDefault();
        authservice.logout();
    };

    
        const [hover, setHover] = useState(null);
        return(
            <body id="fb">
                <div className="cont" id="cont">
                    <div className="form-cont sign-up-cont">
                        <form action="#">
                            <h1 className="htag">Give Us Feedback</h1>
                            <p>Help Us Improve</p>
                            <div>
                                <span>Overall Platform: </span>
                                {[...Array(5)].map((stars, i) => {
                                    const starsValue = i + 1;
                                    return (
                                    <label>
                                        <input type="radio" name="stars" 
                                        value={starsValue}
                                        onChange={e => change(e)}
                                         />
                                        <FaStar 
                                        className="star"
                                        color = {starsValue <= hover || starsValue <= state.stars ? "#ffc107" : "#fff" }
                                        onMouseEnter={() => setHover(starsValue)}
                                        onMouseLeave={() => setHover(null)}
                                        size={25} />
                                    </label>
                                    );
                                })}
                            </div>
                            <input name="ux" type="text" 
                            placeholder="UX" 
                            value={state.ux} 
                            onChange={e => change(e)}
                            required />
                            <input name="Qlevel" type="text" placeholder="Question Toughness" 
                            value={state.Qlevel} 
                            onChange={e => change(e)}
                            required />
                            <textarea name="sugg" type="text"
    placeholder="Suggestion"
    value={state.sugg}
    onChange={e => change(e)}
    required />
                            <button type="submit" onClick={e => onSubmit(e)}>Submit</button>
                        </form>
                    </div>  
                </div>
            </body>
        )
    }
