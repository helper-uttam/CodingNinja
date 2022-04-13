import classes from "./Winning.module.css";
import { Link } from "react-router-dom";

const Winning = (props) => {

    const applause = () => {
        let audio = new Audio("/assets/winning.wav");
        audio.play()
        audio.addEventListener('ended', function () {
            audio.currentTime = 0;
            audio.play();
        }, false);
    }
    if(props.won !== "Computer"){
        applause();
    }
    return <div className={classes.container}>
        {props.won === "You" && 
        <div>
            <h1 className={classes.title}>Congratulations 🎉🎊🥳</h1>
            <h3 className={classes.user}>You Won 😎</h3>
            <h3>You rocked...! We loved your speed and accuracy, keep it up.🎉🎊</h3>
        </div>
        }
        {props.won === "Computer" && 
        <div>
            <h1 className={classes.title}>Better Luck Next Time 😥</h1>
            <h3 className={classes.user}>Computer Won..!</h3>
            <h3>We encourage you to take it as challenge and we know that you'll rock next time.🎉🎊</h3>
            <a href="https://quizgame-9611d.web.app/"> <button className={classes.btn}>Play Again</button></a>
        </div>
        }
        
    </div>
}
export default Winning;