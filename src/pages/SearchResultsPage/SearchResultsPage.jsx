import './SearchResultsPage.css'
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
        <ul>
            <h1 className='search-results-title'>Products</h1>
            {searchResults.map((searchResult, idx) => (
                <ResultsList searchResult={searchResult} key={idx} searchResults={searchResults} />
            ))}
        </ul>
    )
}