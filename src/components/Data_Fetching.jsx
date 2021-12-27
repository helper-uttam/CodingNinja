import axios from 'axios';


const Data_Fetching = async (props) => {
    console.log(process.env.QUIZ_API_KEY);
    try{
        const {data} = await axios.get(`https://quizapi.io/api/v1/questions?
        apiKey=${process.env.REACT_APP_QUIZ_API_KEY}
        &limit=20
        &category=${props.cat}`
        )
        console.log(data);
    } catch(err){
        console.log(err);
    } 
    
};

export default Data_Fetching;