import './SearchResultsPage.css'
import { useState, useEffect } from 'react'
import ResultsList from '../../components/ResultsList/ResultsList'
import { searchItems } from '../../utilities/search-api'

export default function SearchResultsPage({ searchResults, searchData }) {
    const [sortedResults, setSortedResults] = useState(searchResults)

    function handleSortChange(event) {
        const sortOrder = event.target.value;

        const sorted = [...searchResults].sort((a, b) => {
            if (sortOrder === 'low-to-high') {
                return a.price - b.price;
            } else if (sortOrder === 'high-to-low') {
                return b.price - a.price;
            }
            return 0; // Default no sorting
        });

        setSortedResults(sorted);
    }

    // useEffect(function () {
    //     async function fetchResults() {
    //         const searchResults = await searchItems()
    //         setResults(searchResults)
    //     }
    //     fetchResults()
    // }, [])
    return (
        <div>
            <h1 className="search-results-title">
                Products for "{searchData.searchText}"
            </h1>

            <label htmlFor="sort-dropdown">Sort by: </label>
            <select id="sort-dropdown" onChange={handleSortChange}>
                <option value="">Select</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
            </select>

            <ul>
                {sortedResults.map((searchResult, idx) => (
                    <ResultsList
                        searchResult={searchResult}
                        key={idx}
                        searchResults={sortedResults}
                    />
                ))}
            </ul>
        </div>
    );
}