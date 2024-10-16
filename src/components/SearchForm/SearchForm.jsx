import './SearchForm.css'

export default function SearchForm ({handleSubmit, searchData, setSearchData}) {

    function handleChange(evt) {
        setSearchData({
            ...searchData,
            [evt.target.name]: evt.target.value,
        });
    }

    return (
        <div>
            <form className='searchForm' onSubmit={handleSubmit}>
                <input type="text"  name="searchText"  value={searchData.searchText}  onChange={handleChange} required />
                <button className='search-button' type="submit">Search</button>
            </form>
        </div>
    )
}