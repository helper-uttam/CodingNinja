import classes from "./Signin.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";


const Signin = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const handleSignup = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(passwordConfirmRef.current.value);
    }
    return <div className={classes.main}>
    <div id={classes.container}>
        <div id={classes.welcome}>
            <h1>Welcome</h1>
        </div>
        <div id={classes.arrows}>
            <div class={classes.down} id={classes.one}></div>
            <div class={classes.down} id={classes.two}></div>
            <div class={classes.down} id={classes.three}></div>
        </div>
</div>
    <div className={classes.box}>
        <form>
            <input type="email" placeholder="abc@gmail.com" ref={emailRef} autoComplete="true"></input>
            <input type="password" placeholder="Set password" ref={passwordRef} autoComplete="true"></input>
            <div className={classes.buttons}>
                <button type="submit" id={classes.signup} onClick={handleSignup}> <Link style={{textDecoration: "none", color: "gray"}} to="/welcome">Signin</Link></button>
            </div>
        </form>
        <div className={classes.oauth}>
            <Link  style={{color: "gray", textDecoration: "underline"}} to="/signup">Create new account?</Link>
        </div>
    </div>
    </div>
}

export default Signin;