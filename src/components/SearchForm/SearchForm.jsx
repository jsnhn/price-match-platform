import { useState } from 'react'
import * as searchItems from '../../utilities/search-api'

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
        try {
            const results = await searchItems(searchData.searchText)
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