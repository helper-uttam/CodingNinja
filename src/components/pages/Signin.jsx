import classes from "./Signin.module.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const Signin = () => {
    const [error, setError] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    var [user, setUser] = useState(null);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser.email);
        console.log(user);
    });

    const registerUser = async (e) => {
        e.preventDefault();
        let email = emailRef.current.value;
        let pass = passwordRef.current.value;
        try {
            const user = await signInWithEmailAndPassword(auth, 
                email, 
                pass
            );   
            console.log(user.user.email + " "  + email);
            setUser(user.user.email);

        } catch(error) {
            setError(error.message)
            console.log(error);
        }
    };
    return <div className={classes.main}>
    <div id={classes.container}>
        <div id={classes.welcome}>
            <h1>Welcome</h1>
        </div>
        <div id={classes.arrows}>
            <div className={classes.down} id={classes.one}></div>
            <div className={classes.down} id={classes.two}></div>
            <div className={classes.down} id={classes.three}></div>
        </div>
</div>
    <div className={classes.box}>
        <form>
            <input type="email" placeholder="abc@gmail.com" ref={emailRef} autoComplete="true"></input>
            <input type="password" placeholder="Set password" ref={passwordRef} autoComplete="true"></input>
            <div className={classes.buttons}>
                <button type="submit" id={classes.Signin} onClick={registerUser}> 
                <Link style={{textDecoration: "none", color: "gray"}} to={(user && user === emailRef.current.value) ? "/welcome" : "/signin"}>Signin</Link>
                </button>
            </div>
        </form>
        <div className={classes.oauth}>
            <Link  style={{color: "gray", textDecoration: "underline"}} to="/signup">Create new account?</Link>
        </div>
    </div>
    </div>
}

export default Signin;