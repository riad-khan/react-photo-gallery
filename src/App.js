import './App.css';
import  MainComponent  from './component/mainComponent';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <MainComponent />
      </Router>
       
    </div>
  );
}

export default App;
