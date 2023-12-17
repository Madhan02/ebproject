import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import styles from "./index.css"

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className='row'>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={'/'}>
                {/* E&B Project Demo Website */}
              </Link>
            </div>
          </nav>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route path="/homePage" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
