import { useState } from 'react'
import ResultsList from '../../components/ResultsList/ResultsList'
import { searchItems } from '../../utilities/search-api'

export default function SearchResultsPage() {
    const [results, setResults] = useState([])

    useEffect(function () {
        async function fetchResults() {
            const searchResults = await searchItems()
            setResults(searchResults)
        }
        fetchResults()
    }, [])

    return (
        <ResultsList 
        
        />
    )
}