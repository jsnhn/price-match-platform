import './ResultsList.css'

export default function ResultsList({ results }) {
    return ( 
        <ul>
            {results.map((result, idx) => (
                <li key={idx}>
                    <a href={result.link} target="_blank" rel="noopener noreferrer">
                    <img src={result.thumbnail} />
                    <h2>{result.title}</h2>
                    </a>
                    <h3>{result.price}</h3>
                </li>
            ))}
        </ul>
    )
}

//opens a new tab target="_blank" rel="noopener noreferrer" noopener - protects the new page to be accessed by the window