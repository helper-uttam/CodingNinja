import classes from "./Welcome.module.css";

const Welcome = (props) => {

    const optionHandler = (e) => {
        if(e === "DevOps")
        props.category("DevOps");
        else
        props.category( e.target.value);
    }
    
    const startMusic = () => {
        let audio = new Audio("/assets/background.mp3");
        audio.play()
        document.getElementById('question_area').scrollIntoView();
        optionHandler("DevOps");
    } 
    return <div className={classes.welcome}>
    <div>
        <h1 className={classes.title}>Quiz Time</h1>
    </div>
    <div className={classes.tags}>
    <select onChange={optionHandler} id={classes.courses}>
        <option className={classes.options}>Select an Option</option>
        <option className={classes.options} value="DevOps">DevOps</option>
        <option className={classes.options} value="Docker">DOCKER</option>
        <option className={classes.options} value="sql">MySQL</option>
        <option className={classes.options} value="bash">BASH</option>
        <option className={classes.options} value="Linux">LINUX</option>
    </select>
    </div>
        <h1 className={classes.kreep}>
        <button className={classes.button}  onClick={startMusic}>GO</button>
        </h1>   
    </div>
}

export default Welcome;