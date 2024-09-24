module.exports = {
    index
};

const { getJson } = require('serpapi')

async function index(req, res) {
    const searchTerm = req.body.query; 
    
    try {
        getJson({
            engine:'google',
            q: searchTerm,
            hl: 'en',
            gl: 'us',
            google_domain: 'google.com',
            num: '5',
            safe:'active',
            api_key: process.env.SERPAPI
        }, (json) => {
            res.json(searchTerm)
            console.log(json["organic_results"]);
        });

    } catch (err) {
        console.error
        res.status(400).json(err);
    }
}