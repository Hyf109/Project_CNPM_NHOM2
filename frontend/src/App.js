import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import JoinEvent from './components/JoinEvent';

function App() {
  return (
    <Router>
      <div className="App">
              <NavBar />
              <div className="content">
                <Routes>
                  <Route exact path="/join" element={<JoinEvent/>}/>
                </Routes>
              </div>
          </div>
    </Router>
  );
}

export default App;
