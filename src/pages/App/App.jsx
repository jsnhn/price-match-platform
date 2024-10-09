import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom' // need to import singular route as well
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from '../../utilities/users-service';
import SearchPage from "../SearchPage/SearchPage";
import SearchResultsPage from "../SearchResultsPage/SearchResultsPage";
import { searchItems } from '../../utilities/search-api'
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage";


export default function App() {
  const [user, setUser] = useState(getUser()) // setUser is transferable data
  const [searchData, setSearchData] = useState({
    searchText: ''
})
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log('we are here') //this checks if it actually running
    try {
        const results = await searchItems({ query: searchData.searchText }) //Unexpected token '"', ""b"" is not valid JSON. this is what happens if it isnt in an object 
        console.log('Search Results:', results)
        setSearchResults(results)
        navigate('/results');
    } catch (err) {
        console.log (err)
    }
  }

  return (
    <main className='App'>
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<SearchPage handleSubmit={handleSubmit} searchData={searchData} setSearchData={setSearchData} />} />
          {/* <Route path="/user/new" element={<NewOrderPage />} />   */}
          <Route path="/user/new" element={<AuthPage setUser={setUser} />} />
          <Route path="/results" element={<SearchResultsPage searchResults={searchResults}  />} />
          <Route path="/results/:resultTitle" element={<ItemDetailPage searchResults={searchResults}/>} />
        </Routes>
      </>
    </main>
  );
}

//elements accepts jsx components
// you wrap in react fragments because it can not render 2 child back to back. eg navbar and routes