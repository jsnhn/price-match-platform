module.exports = {
    index
};

async function index(req, res) {
    const searchTerm = req.body.query; // Access the query parameter
    console.log(searchTerm); // Log to see if it’s coming through
    res.json(searchTerm)
}