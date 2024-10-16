import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { searchItems } from '../../utilities/search-api';

export default function ItemDetailPage({ searchResults }) {
    const { resultTitle } = useParams(); 
    const [sellerResults, setSellerResults] = useState([]); 


    const result = searchResults.find((res) => res.title === resultTitle);

    // Once the result is available, useEffect will initiate a second search using the same result.title
    useEffect(() => {
        async function fetchSellerResults() {
            if (result) {
                try {
                    const sellers = await searchItems({ query: result.title }); 
                    console.log('Similar Results:', sellers)
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
            <Link to={result.link} target="_blank" rel="noopener noreferrer">
                <h1>{result.title}</h1>
                <img src={result.thumbnail} alt={result.title} />
                <h3>Seller: {result.source}</h3>
                <h4>Price: {result.price}</h4>
                <h5>Rating: {result.rating}</h5>
            </Link>


            <h2>Other Sellers</h2>
                <ul>
                    {sellerResults.map((seller, idx) => (
                        <li key={idx}>
                            <Link to={seller.link} target="_blank" rel="noopener noreferrer">
                            <img src={result.thumbnail} alt={result.title} />
                            <h3>{result.title}</h3>
                            <h4>{seller.source}</h4>
                            <h5>Price: {seller.price}</h5>
                            <h6>{seller.second_hand_condition}</h6>
                            </Link>   
                        </li>
                    ))}
                </ul>
        </div>
    );
}