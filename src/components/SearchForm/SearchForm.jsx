import { useState } from 'react'
import { searchItems } from '../../utilities/search-api'

export default function SearchForm () {
    const [searchData, setSearchData] = useState({
        searchText: ''
    })

    function handleChange(evt) {
        setSearchData({
            ...searchData,
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log('we are here') //this checks if it actually running
        try {
            const results = await searchItems({ query: searchData.searchText }) //Unexpected token '"', ""b"" is not valid JSON. this is what happens if it isnt in an object 
            console.log('Search Results:', results)
        } catch (err) {
            console.log (err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  name="searchText"  value={searchData.searchText}  onChange={handleChange} required />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}