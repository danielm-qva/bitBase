
import './App.css';
import Barra from './component/NavBar/NavBar.js';
import { Jumbotron, Container } from 'react-bootstrap';

function App() {
  return (
    <div>

      <Barra />
      <Jumbotron className="backColor" fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
    </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;