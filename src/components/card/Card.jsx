import { useState } from 'react';
import  Score, { increaseComp, increaseHuman, setTime } from '../Score';
import classes from './Card.module.css';
import Winning from "../Winning";


const Card = (props) => {
    var [counter, setCounter] = useState(0);
    var lastId = null;
    var [loading, setLoading] = useState(false);
    var [user, setUser] = useState(1);
    var [comp, setComp] = useState(1);

    const handleCounter = () => {
        setCounter(++counter);
    }
    const handleCounter_click = () => {
        setTime();
        console.log('clicked');
        handleCounter();
    }
    const checkAns = (e) => {
        var target = e.target || e.srcElement;
        lastId = target.id;
        console.log(counter + " " + user + " " + comp);
        if(props.corr[counter].toString() === lastId){
            document.getElementById(lastId).style.color="green";
            let audio = new Audio("/assets/evil_laugh.mp3");
            audio.play();
            setUser(user+1);
            increaseHuman();
        }else{
            document.getElementById(lastId).style.color="red";
            let audio = new Audio("/assets/oh_no.mp3");
            audio.play();
            setComp(comp+1);
            increaseComp();
        }
        setLoading(true);
        setTimeout(() => {
            handleCounter_click();
            document.getElementById(lastId).style.color="";
            setLoading(false);
        }, 1000);
        // console.log(typeof user + " " + comp);
    }
    
    // console.log(props.a[0].answer_e );
    return(<div id="question_area" className={classes.card_body}>
        {counter < 10 && <h1><Score skipQues={handleCounter_click} compScore={setComp} /></h1>}
        {counter >= 10 && <Winning won={user >= comp ? "You":"Computer"} />}
        {counter < 10 && <>
        <h4 className={classes.que}>{counter+1}.  {props.q[counter]}</h4>
        <h4>Options:</h4>
        <div  className={classes.options}>
            <div id="1" className={classes.one} onClick={checkAns} >
                {props.a[counter].answer_a}
            </div>
            <div  id="2" className={classes.two} onClick={checkAns}>
                {props.a[counter].answer_b}
            </div>
            {
                props.a[counter].answer_c !== null &&
                <div  id="3" className={classes.three} onClick={checkAns}>
                {props.a[counter].answer_c}
                </div>
            }
            {
                props.a[counter].answer_d !== null &&
                <div  id="4" className={classes.four} onClick={checkAns}>
                {props.a[counter].answer_d}
                </div>
            }
            {
                props.a[counter].answer_e !== null &&
                <div id="5" className={classes.five} onClick={checkAns}>
                {props.a[counter].answer_e}
                </div>
            }
            <button className={classes.next} onClick={handleCounter_click}>{loading ? "Please wait ..." : "Skip"}</button>
        </div>
        </>}
    </div>);
}

export default Card;
