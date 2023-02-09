import './App.css';

import Show from "./components/Show"
import Create from "./components/Create"
import Edit from "./components/Edit"

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Show/>}/>
<Route path='/edit' element={<Edit/>}/>
<Route path='/create' element={<Create/>}/>



      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;