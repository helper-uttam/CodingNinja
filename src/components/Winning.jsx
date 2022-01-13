import classes from "./Winning.module.css";

const Winning = (props) => {
    return <div className={classes.container}>
        {props.won !== "Computer" && <h1 className={classes.title}>Congratulations 🎉🎊🥳</h1>}
        <h3 className={classes.user}>{props.won} Won 😎</h3>
    </div>
}
export default Winning;