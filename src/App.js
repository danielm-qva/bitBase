import './App.css';
import Barra from './component/NavBar/NavBar.js';
import Footer from './component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
        <Barra/>
        <Footer/>
        <Switch>
            <Route path="/about">
            </Route>
            <Route path="/users">
            </Route>
            <Route path="/">
            </Route>
        </Switch>
    </div>
</Router>
      
  );
}

export default App;