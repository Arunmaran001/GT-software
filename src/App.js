import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Todo from './project/Todo';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/Todo' element={<Todo />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
