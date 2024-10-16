import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { searchItems } from '../../utilities/search-api';
import './ItemDetailPage.css'

export default function ItemDetailPage({ searchResults }) {
    const { resultTitle } = useParams(); 
    const [sellerResults, setSellerResults] = useState([]); 
    const result = searchResults.find((res) => res.title === resultTitle);

    // Fetch seller results based on the main result
    useEffect(() => {
        async function fetchSellerResults() {
            if (result) {
                try {
                    const sellers = await searchItems({ query: result.title }); 
                    console.log('Similar Results:', sellers);
                    setSellerResults(sellers);
                } catch (err) {
                    console.error('Error', err);
                }
            }
        }
        fetchSellerResults();
    }, [result]);

    return (
        <div>
            <div className="first-result-container">
                <Link to={result.link} target="_blank" rel="noopener noreferrer">
                    <img className='first-result-img' src={result.thumbnail} alt={result.title} />
                </Link>
                <div className="text-container">
                    <h1>{result.title}</h1>
                    <h3>Seller: {result.source}</h3>
                    <h4>Price: {result.price}</h4>
                    <h5>Rating: {result.rating}</h5>
                </div>
            </div>
    
            <h2>Compare Buying Options</h2>
    
            <ul className="seller-result-list">
                {sellerResults.map((seller, idx) => (
                    <li key={idx}>
                        <Link to={seller.link} target="_blank" rel="noopener noreferrer">
                            <div className="seller-text-container">
                            <img className='other-seller-img' src={result.thumbnail} alt={result.title} />
                                <h4>{seller.source}</h4>
                                <h6>{seller.second_hand_condition}</h6>
                                <h5>Price: {seller.price}</h5>
                            </div>
                        </Link>   
                    </li>
                ))}
            </ul>
        </div>
    );
}