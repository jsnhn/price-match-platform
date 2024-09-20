import { useState } from "react";
import { Routes, Route } from 'react-router-dom' // need to import singular route as well
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from '../../utilities/users-service';
import SearchPage from "../SearchPage/SearchPage";


export default function App() {
  const [user, setUser] = useState(getUser()) // setUser is transferable data
  return (
    <main className='App'>
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<SearchPage />} />
          {/* <Route path="/user/new" element={<NewOrderPage />} />   */}
          <Route path="/user/new" element={<AuthPage setUser={setUser} />} />
        </Routes>
      </>
    </main>
  );
}

//elements accepts jsx components
// you wrap in react fragments because it can not render 2 child back to back. eg navbar and routes