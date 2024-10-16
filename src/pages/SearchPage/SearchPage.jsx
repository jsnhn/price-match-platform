import './SearchPage.css'
import SearchForm from '../../components/SearchForm/SearchForm'
// import { checkToken } from '../../utilities/users-service'


export default function SearchPage({handleSubmit, searchData, setSearchData}) {
    return (
        <>
        <SearchForm  handleSubmit={handleSubmit} searchData={searchData} setSearchData={setSearchData} />
        <div className='logo-container'>
            <img className="amazon-logo" src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"  />
            <img className="reverb-logo" src="https://www.musicincmag.com/images/news/Reverb_1.png" alt="" />
            <img className="ebay-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png" alt="" />
        </div>
        </>
    )
}