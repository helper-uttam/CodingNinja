import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './card/Card';

const FetchData =  (props) => {
    const [ques, setQues] = useState([]); // array of 10 questions
    const [answers, setAnswer] = useState([{}]);
    const [corrAns, setCorrectAnswers] = useState([]);  //array of correct answers
    
    const questionHandler = (data) => {
        let quest = [];
        data.map((item) => {
            quest.push(item.question);
        });
        setQues(quest);
    }

    const answersHandler = (data) => {
        let options = [];
        data.map((item)=>{
            options.push(item.answers);
        });
        setAnswer(options)
    }
    const correctAnsHandler = (data) => {
        let correctAns = [];
        data.map((item)=>{
            let x = item.correct_answers;
            for(const key in x){
                if(x[key] === 'true'){
                    // correctAns.push(x[key]);
                    if(key === 'answer_a_correct'){
                        correctAns.push('1');
                    }
                    else if(key === 'answer_b_correct'){
                        correctAns.push('2')
                    }
                    else if(key === 'answer_c_correct'){
                        correctAns.push('3');
                    }
                    else if(key === 'answer_d_correct'){
                        correctAns.push('4');
                    }
                    else if(key === 'answer_e_correct'){
                        correctAns.push( '5');
                    }
                    else
                        correctAns.push('6');
                }
            }
        })
       setCorrectAnswers(correctAns);
    }

    const fetch = async() => {
        const response = await axios.get(`https://quizapi.io/api/v1/questions?
        apiKey=${process.env.REACT_APP_QUIZ_API_KEY}
        &limit=10
        &category=${props.cat}`
        )
        .then((response) => {
            if(response.status !== 200){
                throw new Error("Something went wrong!");
            }
            console.log(props.cat);
            let fetchedData =  response.data;
            questionHandler(fetchedData);
            answersHandler(fetchedData);
            correctAnsHandler(fetchedData);
        })
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