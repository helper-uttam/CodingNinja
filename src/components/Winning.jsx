import classes from "./Winning.module.css";

const Winning = (props) => {

    const applause = () => {
        let audio = new Audio("/assets/winning.wav");
        audio.play()
        audio.addEventListener('ended', function () {
            audio.currentTime = 0;
            audio.play();
        }, false);
        audio.togglePlay = audio.togglePlay.bind(audio);
    }
    if(props.won !== "Computer"){
        applause();
    }
    return <div className={classes.container}>
        {props.won === "You" && <h1 className={classes.title}>Congratulations 🎉🎊🥳</h1>}
        <h3 className={classes.user}>{props.won} Won 😎</h3>
    </div>
}
export default Winning;