import { useState } from "react";
import "./Welcome.css";
const Welcome = () => {
    const [opt, setOpt] = useState();
    const startMusic = () => {
        let audio = new Audio("/assets/background.mp3");
        audio.play()
        document.getElementById('question_area').scrollIntoView();
    } 
    const optionHandler = (e) => {
        setOpt(e.target.value);
    }
    return <div className="welcome">
    <div>
        <h1 className="title">Quiz Time</h1>
    </div>
    <select onChange={optionHandler} id="courses">
        <option>DevOps</option>
        <option>JavaScript</option>
        <option>MySQL</option>
        <option>BASH</option>
        <option>PHP</option>
    </select>
        <h1 className="kreep">
        <button className="button button5" onClick={startMusic}>GO</button>
        </h1>   
    </div>
}

export default Welcome;