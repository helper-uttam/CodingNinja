import classes from './Card.module.css';

const Card = (props) => {

    var lastId = null;
    const checkAns = (e) => {
        var target = e.target || e.srcElement;
        lastId = target.id;
        if(props.corr[0].toString() === lastId){
            document.getElementById(lastId).style.color="green";
        }else{
            document.getElementById(lastId).style.color="red";
        }
    }
 
    return(<div id="question_area" className={classes.card_body}>
        <h1>Question</h1>
        <h4>{props.q[0]}</h4>
        <h4>Options:</h4>
        <div  className={classes.options}>
            <div id="1" className={classes.one} onClick={checkAns} >
                {props.a[0].answer_a}
            </div>
            <div  id="2" className={classes.two} onClick={checkAns}>
                {props.a[0].answer_b}
            </div>
            <div  id="3" className={classes.three} onClick={checkAns}>
                {props.a[0].answer_c}
            </div>
            <div  id="4" className={classes.four} onClick={checkAns}>
                {props.a[0].answer_d}
            </div>
            {/* <div id="5" className={classes.five} onClick={checkAns}>
                {props.a[0].answer_e}
            </div> */}
        </div>
    </div>);
}

export default Card;