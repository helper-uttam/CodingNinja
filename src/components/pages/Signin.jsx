import classes from "./Signin.module.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Sawo from 'sawo';


const Login = () => {
    const history = useHistory();
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: process.env.REACT_APP_SAWO_API_KEY,
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                console.log(payload)
                // you can use this payload for your purpose

                localStorage.setItem('email','users.email');
                window.location.reload();
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
        
    }, [])
    
    return  <div className={classes.sawoContainer}>
                <div className={classes.sawo} id="sawo-container" style={{height:"400px", width:"500px"}}></div>
            </div>
}
export default Login;
