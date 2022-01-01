import './App.css';
import FetchData from './components/FetchData';
const categories = ["DevOps", "Linux", "Cloud", "Docker"];
function App() {
  return (
    <FetchData cat={categories[0]} />
  );
}

export default App;
