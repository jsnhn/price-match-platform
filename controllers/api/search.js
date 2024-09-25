const path = require('path') // function to use to correctly created file path.
const fs = require('fs') // fs = file system
const sampleData = require('../../data/serpapi-data.json')

module.exports = {
    index
};

const { getJson } = require('serpapi')

async function index(req, res) {
    const searchTerm = req.body.query; 
    
    try {
        // getJson({
        //     engine:'google',
        //     q: searchTerm,
        //     hl: 'en',
        //     gl: 'us',
        //     google_domain: 'google.com',
        //     num: '5',
        //     safe:'active',
        //     api_key: process.env.SERPAPI
        // }, (json) => {
        //     writeObjToFile(json);
        //     res.json(searchTerm)
        // });
        res.json(sampleData)
    } catch (err) {
        console.error
        res.status(400).json(err);
    }
}

// helper functions

function writeObjToFile(json) {
    const jsonStr = JSON.stringify(json, null, 4)
    const filePath = path.join(__dirname.replace('/controllers/api', ''), 'data', 'serpapi-data.json')

    try {
        fs.writeFileSync(filePath , jsonStr)
    } catch (err) {
        console.log(err)
    }
}