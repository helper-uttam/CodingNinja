import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAi2vgg1pLDwMzgCtDTMZa2jvCO4VPDgP4",
    authDomain: "quizgame-9611d.firebaseapp.com",
    projectId: "quizgame-9611d",
    storageBucket: "quizgame-9611d.appspot.com",
    messagingSenderId: "544122739977",
    appId: "1:544122739977:web:d4bbce80fbd3a9725d47d8"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
