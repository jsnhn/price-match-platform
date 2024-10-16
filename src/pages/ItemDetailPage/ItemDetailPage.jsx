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
            <div className="comparison-header">
                <span className="sold-by-header">Sold By</span>
                <span>Condition</span>
                <span className="item-price-header">Item Price</span>
            </div>

            <ul className="seller-result-list">
                {sellerResults.map((seller, idx) => (
                    <li key={idx} className="seller-result-item">
                        <Link to={seller.link} target="_blank" rel="noopener noreferrer">
                                <div className="seller-text-container">
                                <img className='other-seller-img' src={result.thumbnail} alt={result.title} />
                                <span>{seller.source}</span>
                                <span className="seller-condition">{seller.second_hand_condition}</span>
                                <span className="seller-price">{seller.price}</span>
                            </div>
                        </Link>   
                    </li>
                ))}
            </ul>
        </div>
    );
}