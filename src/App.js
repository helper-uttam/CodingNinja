import './App.css';
import Data_Fetching from './components/Data_Fetching';
const categories = ["DevOps", "Linux", "Cloud", "Docker"];
function App() {
  return (
    <Data_Fetching cat={categories[3].toString()} />
  );
}

export default App;
