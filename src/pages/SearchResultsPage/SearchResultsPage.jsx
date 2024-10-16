import './SearchResultsPage.css'
import { useState, useEffect } from 'react'
import ResultsList from '../../components/ResultsList/ResultsList'
import { searchItems } from '../../utilities/search-api'

export default function SearchResultsPage({ searchResults, searchData }) {

    // useEffect(function () {
    //     async function fetchResults() {
    //         const searchResults = await searchItems()
    //         setResults(searchResults)
    //     }
    //     fetchResults()
    // }, [])

    return (
        <ul>
        <h1 className='search-results-title'>Products for "{searchData.searchText}" </h1>
            {searchResults.map((searchResult, idx) => (
                <ResultsList searchResult={searchResult} key={idx} searchResults={searchResults} />
            ))}
        </ul>
    )
}