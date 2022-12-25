import { Router } from '@reach/router';
import { Home } from './Home';

function App() {
  console.log("contador")
  return (
    <Router>
      <Home path= '/'/>
      <Home path= '/contador'/>
    </Router>
  );
}

export default App;
