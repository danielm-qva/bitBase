import './App.css';
import Barra from './component/NavBar/NavBar.js';
import Footer from './component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Jumbotron , Button} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <Barra />
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
  </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;