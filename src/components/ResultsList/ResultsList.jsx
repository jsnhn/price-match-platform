import './ResultsList.css'

export default function ResultsList({ searchResults }) {

    return ( 
        <ul>
            {searchResults.map((searchResult, idx) => (
                <li key={idx}>
                    <a href={searchResult.link} target="_blank" rel="noopener noreferrer">
                    <img src={searchResult.thumbnail} />
                    <h2>{searchResult.title}</h2>
                    </a>
                    <h3>{searchResult.price}</h3>
                </li>
            ))}
        </ul>
    )
}

//opens a new tab target="_blank" rel="noopener noreferrer" noopener - protects the new page to be accessed by the window