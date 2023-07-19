
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from './AuthPage';
import AllTools from './AllTools';
import MyCart from './MyCart';
import NavBar from '../../Components/NavBar';
import Wishlist from './Wishlist';
import Home from './Home';
import ToolDetails from './ToolDetails';
import UpdateTool from './UpdateTool';

//Router
import { Routes, Route } from 'react-router-dom';
import AddTool from './AddTool';




export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
       
      {
        user? 
        <>
          <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/alltools" element={ <AllTools /> }/>
          <Route path='/cart' element={ <MyCart /> }/>
          <Route path='/wishlist' element={ <Wishlist /> }/>
          <Route path='/home' element={ <Home /> }/>
          <Route path='/addtool' element={ <AddTool /> }/>
          <Route path='/:id' element={ <ToolDetails user={user} setUser={setUser}/> }/>
          <Route path='/updatetool/:id' element={ <UpdateTool /> }/>
        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
  }
