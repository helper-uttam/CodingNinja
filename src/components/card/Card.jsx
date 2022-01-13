import { useState } from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    var [counter, setCounter] = useState(0);
    var lastId = null;
    var [loading, setLoading] = useState(false);

    const handleCounter = () => {
        setCounter(++counter);
        // console.log("clicked");
    }

    const checkAns = (e) => {
        var target = e.target || e.srcElement;
        lastId = target.id;
        console.log(counter + " " + props.corr[counter] + "  " + lastId);
        if(props.corr[counter].toString() === lastId){
            document.getElementById(lastId).style.color="green";
            let audio = new Audio("/assets/evil_laugh.mp3");
            audio.play()
        }else{
            document.getElementById(lastId).style.color="red";
            let audio = new Audio("/assets/oh_no.mp3");
            audio.play()
        }
        setLoading(true);
        setTimeout(() => {
            handleCounter();
            document.getElementById(lastId).style.color="";
            setLoading(false);
        }, 4000);
    }
    
    // console.log(props.a[0].answer_e );
    return(<div id="question_area" className={classes.card_body}>
        <h1>Question</h1>
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
            <button className={classes.next} onClick={handleCounter}>{loading ? "Please wait ..." : "Skip"}</button>
        </div>
    </div>);
}

export default Card;