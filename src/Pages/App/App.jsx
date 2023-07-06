
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from './AuthPage';
import NewOrderPage from './NewOrderPage';
import OrderHistoryPage from './OrderHistoryPage';
import NavBar from '../../Components/NavBar';

//Router
import { Routes, Route } from 'react-router-dom';
import { set } from 'mongoose';



export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
       
      {
        user? 
        <>
          <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/orders/new" element={ <NewOrderPage /> }/>
          <Route path='/orders' element={ <OrderHistoryPage /> }/>
        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
  }
