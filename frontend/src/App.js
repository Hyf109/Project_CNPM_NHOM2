import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
              <NavBar />
              <div className="content">
                <Routes>

                </Routes>
              </div>
          </div>
    </Router>
  );
}

export default App;
