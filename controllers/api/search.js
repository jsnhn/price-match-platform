module.exports = {
    index
};

async function index(req, res) {
    const searchTerm = req.query.query; // Access the query parameter
    console.log(searchTerm); // Log to see if it’s coming through
    // Add your search logic here
}