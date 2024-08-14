const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


module.exports = {
    create,
    login,
    checkToken
}


async function create(req, res) {
    try {
        const user = await User.create(req.body) // at somepoint this will be interacting with a data base. // req.body is taking from the body fom the form. this is waiting for a mongoose promise. any time it interacts with amodel it will be async
        const token = createJWT(user) // passing the user we just created
        res.json(token) // send back to the client
    } catch (err) {
        console.log(err)
        res.status (400).json(err)
    }
}
// need a way to compare a pass word will look different - for login lab

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password); // comparing is an async operation. bycrypt return a boolean. returns a hashed passowrd
        if (!match) throw new Error(); // dont every just say incorrect password, you whould use incorrect credentials. 
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        console.log(err) // just to see what the error is. 
        res.status (400).json(err)
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp) // what we attache dot the request object
}
/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign( // .sign is used to creat tokens
      // data payload
        { user }, // key is user, the value is the arguement. this is short hand syntax
        process.env.SECRET, // this is the signature that will varify that the token came from this server. 
        { expiresIn: '24h' }
    );
}

// function create(req, res) {
//     console.log('req.body', req.body)
//     res.json({
//         user: {
//             name: req.body.name,
//             email: req.body.email // this is what you will see in the console. 
//         }
//     })
// }