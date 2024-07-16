import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
 import SignUp from './components/Signup';
import Home from './components/Home';
import Movie from './components/Movie';
import SelectSeat from './components/SelectSeat';
import Success from './components/Success';
import { Button } from 'react-bootstrap';

// const router = createBrowserRouter([
//   {
//     path : "/login",
//     element: <Login/>,
//   },
//   {
//     path : "/signup", 
//     element: <SignUp/>,
//   },
//   {
//     path : '/home',
//     element: <Home />
//   },
//   {
//     path : '/movie/:id',
//     element: <Movie />
//   },
//   {
//     path : '/select',
//     element: <SelectSeat />
//   },
//   {
//     path: '/success',
//     element: <Success/>
//   }
// ]);

function App() {
  const [user,setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setUser(userEmail);
    }
  },[user])

const handleLogout = () => {
  localStorage.removeItem('userEmail');
  // window.location.href = '/login'
  navigate('/login')
}
  return (
    <div>
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
           <h3 className="d-inline-block"> Ticket Box </h3>
          </Navbar.Brand>
          {user && <Button onClick={() => handleLogout()} className='logout-btn'>Logout</Button>}
        </Container>
       </Navbar>
       <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/select' element={<SelectSeat />} />
        <Route path='/success' element={<Success/>} />
       </Routes>
       </div>
        )
      }
  
export default App