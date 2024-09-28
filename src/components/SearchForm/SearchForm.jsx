
export default function SearchForm ({handleSubmit, searchData, setSearchData}) {

    function handleChange(evt) {
        setSearchData({
            ...searchData,
            [evt.target.name]: evt.target.value,
        });
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