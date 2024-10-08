// this file will import a single function. crafts different request off of what send request will recieve. 

// import { getToken } from "./users-service"

export default async function sendRequest(url, method = 'GET', payload = null) { // if the method it left out in the options it will default to get. same with payload, bucase of the =
    const options = { method } //short hand syntax // creates a new object
    if(payload) { // only if there is a pyload provided. 
        options.headers = { 'Content-Type' : 'application/json'}
        options.body = JSON.stringify(payload)
    }

    // const token = getToken()
    // if (token) {
    //     options.headers ||= {} // this or equals // headers may or may not exist by this time. or assignment operator. if opntions.headers is truthy it wondt do anything, if it doesnt exist then just asign ={}. we are creating a new empy object
    //     options.headers.Authorization = `Bearer ${token}`; // provides information of who is making the request, we are only doing it if there is a valid token in the local storage. 
    // }

    const res = await fetch(url, options)
    if(res.ok) return res.json()
    throw new Error('Bad request')
}