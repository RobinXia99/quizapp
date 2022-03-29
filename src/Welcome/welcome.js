import { Fragment, useState } from "react";


const Welcome = (props) => {

    const [input, setInput] = useState('');

    const addPlayer = () => {
        if(input.length > 0) {
            props.handleAdd(input);
        }
        
    }

    return (
        <div>
            <h1 className="title">A VERY RANDOM QUIZ .</h1>
            <div className="input-container">
                <h3 className="instruction-text">Enter your name</h3>
                <input id="name-input" type="text" value={input} onInput={e => setInput(e.target.value) }></input>
                <aside id="start-button" onClick={ addPlayer }>Start</aside>
            </div>
        </div>
    )
}


export default Welcome;