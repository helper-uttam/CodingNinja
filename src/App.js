import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import FetchData from './components/FetchData';
import Welcome from './components/Welcome';
import Signin from "./components/pages/Signin";
import ParticleBackground from './components/Particles/ParticleBackground';

function App() {
  const [rend, setrend] = useState(false);
  var [categ, setCateg] = useState("DevOps");
  const [auth, setAuth] = useState(null);

const getCategory = (selectedCategory) => {
  categ = selectedCategory;
  setrend(true);
  setCateg(selectedCategory);
  console.log(categ);
}
  useEffect(()=>{
    setAuth(localStorage.getItem('email'));
  },[]);

  return <>
      <ParticleBackground />
      <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "45%"
          }}
        >
      {auth &&  <Navbar />}
      <Route path="/game">  
        {rend && <FetchData  cat={categ}></FetchData>}
      </Route> 
      <Route path="/">
        {!auth && <Signin/>}
        {auth && !rend && <Welcome category={getCategory}/>}
      </Route> 
      </div> 
     </>

}

export default App;
