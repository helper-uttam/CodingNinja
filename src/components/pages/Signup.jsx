import { useRef } from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const handleSignup = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(passwordConfirmRef.current.value);
    }
    return <>
    <h1>Quiz Game</h1>
    <div className={classes.container}>
        <form>
            <input type="email" placeholder="abc@gmail.com" ref={emailRef} autoComplete="true"></input>
            <input type="password" placeholder="Set password" ref={passwordRef} autoComplete="true"></input>
            <input type="password" placeholder="Confirm password" ref={passwordConfirmRef} autoComplete="true"></input>
            <div className={classes.buttons}>
                <button type="submit" id={classes.signup} onClick={handleSignup}>Signup</button>
            </div>
        </form>
        <div className={classes.oauth}>
            <Link  style={{color: "gray", textDecoration: "underline"}} to="/signin">Already have an account? Login</Link>
        </div>
    </div>
    </>
}

export default Signup;