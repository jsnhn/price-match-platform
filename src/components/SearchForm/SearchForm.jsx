import { useState } from 'react'

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


    return (
        <div>
            <form>
                <input type="text"  name="searchText"  value={searchData.searchText}  onChange={handleChange} required />
                <button type="submit ">Search</button>
            </form>
        </div>
    )
}