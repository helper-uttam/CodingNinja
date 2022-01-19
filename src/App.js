import { Route } from 'react-router-dom';
import { useState } from 'react';
import FetchData from './components/FetchData';
import Welcome from './components/Welcome';
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";

function App() {
  const [rend, setrend] = useState(false);
  var [categ, setCateg] = useState("DevOps");

const getCategory = (selectedCategory) => {
  categ = selectedCategory;
  setrend(true);
  setCateg(selectedCategory);
  console.log(categ);
}

  return <>
      <Route path="/welcome">  
        {rend === false && <Welcome category={getCategory}/>}
        {rend === true && <FetchData  cat={categ}></FetchData>}
      </Route> 
      <Route path="/signin">
        <Signin/>
      </Route>  
      <Route path="/signup">
        <Signup/>
      </Route>     
     </>

}

export default App;
