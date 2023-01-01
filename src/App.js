import { Route, HashRouter, Routes } from "react-router-dom"
import { Home } from './Home';
import { Blog } from './Blog'

function App() {
  
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
    </>
    
  );
}

export default App