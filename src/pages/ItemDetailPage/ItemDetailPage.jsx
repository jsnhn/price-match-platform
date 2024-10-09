import { useParams } from "react-router-dom"

export default function ItemDetailPage({searchResults}) {
    const { resultTitle } = useParams();
    const result = searchResults.find((res) => res.title === resultTitle)

    return (
        <div>
            <h1>{result.title}</h1>
            <img src={result.thumbnail} alt={result.title} />
            <h3>Price: {result.price}</h3>
            {/* You can add more details here as needed */}
        </div>
    );
}