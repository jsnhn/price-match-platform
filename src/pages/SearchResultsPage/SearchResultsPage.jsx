import { useState, useEffect } from 'react'
import ResultsList from '../../components/ResultsList/ResultsList'
import { searchItems } from '../../utilities/search-api'

export default function SearchResultsPage({ searchResults }) {

    // useEffect(function () {
    //     async function fetchResults() {
    //         const searchResults = await searchItems()
    //         setResults(searchResults)
    //     }
    //     fetchResults()
    // }, [])

    return (
        <div>
            <h1>Search Results</h1>
            <ResultsList searchResults={searchResults} />
        </div>
    )
}