import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './components/Signup/Signup';
import Login from './components/login/Login';
import ToDo from './components/Todo/Todo';
import NewToDo from './components/Todo/NewTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/todo' element={<ToDo/>}/>
          <Route path='/newtodo' element={<NewToDo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;