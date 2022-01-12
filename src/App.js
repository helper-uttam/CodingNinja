import { useState } from 'react';
import FetchData from './components/FetchData';
import Welcome from './components/Welcome';


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
    {rend === false && <Welcome category={getCategory}/>}
    {rend === true && <FetchData  cat={categ}></FetchData>}
    </>
}

export default App;
