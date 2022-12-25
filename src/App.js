import {Routes, Route, BrowserRouter, useLocation} from "react-router-dom"
import { Home } from './Home';

function App() {
  
  return (
    <BrowserRouter>
      <MyComponent/>
      <Routes>
        <Route exact path= "/" element={<Home />}/>
        <Route exact path="/" element ={<Home />}/>
        <Route exact path="/contador.html" element ={<Home />}/>
        <Route exact path="/contador" element ={<Home />}/>
        <Route exact path="contador" element ={<Home />}/>
        <Route exact path="contador.html" element ={<Home />}/>
        <Route exact path="/public/contador.html" element ={<Home />}/>
        <Route exact path="/public/contador" element ={<Home />}/>
        <Route exact path="../public/contador.html" element ={<Home />}/>
        <Route exact path="../public/contador" element ={<Home />}/>
        <Route exact path="http://localhost:3000/contador.html" element ={<Home />}/>
        <Route exact path="http://localhost:3000/contador" element ={<Home />}/>
        <Route exact path="./contador.html" element ={<Home />}/>
        <Route exact path="./contador" element ={<Home />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

function MyComponent() {
  const location = useLocation()
  const currentPath = location.pathname
  console.log(currentPath)
}

export default App