import { useRef, useState } from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    } 
from "firebase/auth";
import { auth } from "../../firebase-config";

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentUser, setUser] = useState({});

    onAuthStateChanged(auth, (currUser) => {
        setUser(currUser.email);
        console.log(currentUser);
    });
    const registerUser = async () => {
        let email = emailRef.current.value;
        let pass1 = passwordRef.current.value;
        let pass2 = passwordConfirmRef.current.value;
        // console.log(email+pass1);
        if(pass1 === pass2){
            setLoading(true);
            try {
                const user = await createUserWithEmailAndPassword(auth, email, pass1);   
                console.log(user);
            } catch(error) {
                setError(error.message)
            }
        }else{
            setError("Password do not match.")
        }
        console.log(error);
    };

    const handleSignup =  (e) => {
        e.preventDefault();
        registerUser();
    }

    return <div className={classes.main}>
    <div id={classes.container}>
        <div id={classes.welcome}>
            <h1>Welcome </h1>
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
            <input type="password" placeholder="Confirm password" ref={passwordConfirmRef} autoComplete="true"></input>
            <div className={classes.buttons}>
                <button type="submit" id={classes.signup} onClick={handleSignup}>Signup</button>
            </div>
        </form>
        <div className={classes.oauth}>
            <Link  style={{color: "gray", textDecoration: "underline"}} to="/signin">Already have an account? Login</Link>
        </div>
        <div className={classes.icons}>
            <a href="https://github.com/helper-uttam" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
            
            <a href="https://stackoverflow.com/users/15806697/uttam" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-stack-overflow" viewBox="0 0 16 16">
            <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"/>
            <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z"/>
            </svg>
            </a>
            
            <a href="https://twitter.com/Uttamku74410059" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
            </a>
        </div>
    </div>
    </div>
}

export default Signup;