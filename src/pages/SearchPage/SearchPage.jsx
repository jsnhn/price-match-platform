import SearchForm from '../../components/SearchForm/SearchForm'
// import { checkToken } from '../../utilities/users-service'


export default function SearchPage({handleSubmit, searchData, setSearchData}) {
    return (
        <SearchForm handleSubmit={handleSubmit} searchData={searchData} setSearchData={setSearchData} />
    )
}