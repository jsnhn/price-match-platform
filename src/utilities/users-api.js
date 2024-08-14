import sendRequest from "./send-request";
const BASE_URL = '/api/users'; //this is an api endpoint. api endpoints returns Json data. not html to redner or template. it sends back raw JSON data.
const LOGIN = '/api/users/login';

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)

    // const res = await fetch(BASE_URL, { // fetch takes time to get to the server which is why we use async
    //     method: 'POST',
    //     headers:{'Content-Type': 'application/json'}, //provices extra info about the fetch itself. it stores another object// server is built using express. it looks to look at incoming headers. what data paylod we are passing to the body below
    //     body: JSON.stringify(userData)
    // });
    // if (res.ok) {
    //     return res.json()// this returns a promise
    // } else {
    //     throw new Error('Invalid Sign Up') // Error is a class
    // }
}

export async function logIn(credentials) {
    return sendRequest(LOGIN, 'POST', credentials)
    // const res = await fetch(LOGIN, {
    //     method: 'POST',
    //     headers:{'Content-Type': 'application/json'}, //provices extra info about the fetch itself. it stores another object
    //     body: JSON.stringify(credentials) // this data is attached to res. 
    // });
    // if (res.ok) {
    //     return res.json()// this returns a promise
    // } else {
    //     throw new Error('Invalid Log In') // Error is a class
    // }
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}


// this is responsible for making fetch request. 
// this will then go to our server.js