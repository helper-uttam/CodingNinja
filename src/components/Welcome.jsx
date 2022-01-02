import "./Welcome.css";
const Welcome = () => {
    const startMusic = () => {
        let audio = new Audio("/assets/background.mp3");
        audio.play()
        document.getElementById('question_area').scrollIntoView();
    } 
    return <div className="welcome">
        <h1 class="kreep">
        <button className="button button5" onClick={startMusic}>⬇</button>
        </h1>   
    </div>
}

export default Welcome;