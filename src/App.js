import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
