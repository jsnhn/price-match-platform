import { useParams, Link } from "react-router-dom"


export default function ItemDetailPage({searchResults}) {
    const { resultTitle } = useParams();
    const result = searchResults.find((res) => res.title === resultTitle)

    return (
        <div>
            <Link to={result.link} target="_blank" rel="noopener noreferrer">
                <h1>{result.title}</h1>
                <img src={result.thumbnail} />
                <h3>Seller: {result.source}</h3>
                <h4>Price: {result.price}</h4>
                <h5>Rating: {result.rating}</h5>
            </Link>
        </div>
    );
}