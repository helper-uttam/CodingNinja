import { useState } from 'react';
import FetchData from './components/FetchData';
import Welcome from './components/Welcome';


function App() {
  const [rend, setrend] = useState(false);
let categ = "DevOps";
const getCategory = (selectedCategory) => {
  categ = selectedCategory;
  // console.log(rend);
  setrend(true);
  // console.log(categ);
}

  return <>
    <Welcome category={getCategory}/>
    {rend === true && <FetchData  cat={categ}></FetchData>}
    </>
}

export default App;
