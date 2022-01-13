import { useState } from "react";
import classes from "./Score.module.css";

let compScoreG = 0, userScoreG = 0;
const setCompScore = () => {
    ++compScoreG;
}
const setUserScore = () => {
    ++userScoreG
}

const Score = () => {
    const [userName, setUserName] = useState("User");
    return <div className={classes.main}>
    <div className={classes.comp}>
        <h3>Computer</h3>
        <h3>{compScoreG}</h3>
    </div>
    <h1>VS</h1>
    <div className={classes.human}>
        <h3>{userName}</h3>
        <h3>{userScoreG}</h3>
    </div>
    </div>
}
export default Score;


const increaseComp = () => {
    setCompScore(compScoreG+1);
}
const increaseHuman = () => {
    setUserScore(userScoreG+1);
}
export {increaseComp, increaseHuman};