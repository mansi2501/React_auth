import { Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={Login} />
    </div>
  );
}

export default App;
