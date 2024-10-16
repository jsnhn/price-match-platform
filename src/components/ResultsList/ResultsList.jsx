import './ResultsList.css'
import { Link } from "react-router-dom";

export default function ResultsList({ searchResults, searchResult }) {

    return ( 
        <ul className='search-results'>
            {searchResults.map((searchResult, idx) => (
                <li key={idx}>
                    <Link to={`/results/${searchResult.title}`} >
                        <div className='result-list-text'>
                            <img className='result-img' src={searchResult.thumbnail} />
                            <h2>{searchResult.title}</h2>
                            <h3>{searchResult.price}</h3>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

//opens a new tab target="_blank" rel="noopener noreferrer" noopener - protects the new page to be accessed by the window