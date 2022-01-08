import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './card/Card';

const FetchData =  (props) => {
    
    const [ques, setQues] = useState([]);
    const [answers, setAnswer] = useState([{}]);
    const [corrAns, setCorrectAnswers] = useState([]);
   
    const fetch = async() => {
        const response = await axios.get(`https://quizapi.io/api/v1/questions?
        apiKey=${process.env.REACT_APP_QUIZ_API_KEY}
        &limit=10
        &category=${props.cat}`
        )
        if(response.status != 200){
            console.log("Something went wrong, while fetching data ...!");
        }else{
            let fetchedData = response.data;
            let questions = [];
            let answer = [];
            let correct_answers = [];
            let indexOfCorrectAns = [];
            fetchedData.map((item) => {
                questions.push(item.question);
                answer.push(item.answers);
                correct_answers.push(item.correct_answers);
            })
            setQues(questions);
            setAnswer(answer);
            let answerIndex = 1;
            
            for (let index = 0; index < 10; index++) {
                Object.values(correct_answers[index]).forEach(item => {
                    if(item === 'true'){
                        indexOfCorrectAns.push(answerIndex);
                        answerIndex = 1;
                        return;
                    }
                    answerIndex++;
                });
            }
            setCorrectAnswers(indexOfCorrectAns);
            //printing all state variables
            // console.log(ques[0]);
            // console.log(answers[0]); //object of 4 answers
            // console.log(corrAns[0]);
        }
    }
    useEffect(()=>{ 
        try{
            fetch();
        }
        catch(error){
            console.log(error);
        }
    }, []);
    return  <Card q={ques} a={answers} corr={corrAns} />  
}

export default  FetchData;