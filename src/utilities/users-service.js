import * as usersAPI from './users-api' //importing everything that is being exported

// export async function signUp(userData) {
//     const token = await usersAPI.signUp(userData) // now a new code execution becayse of awaut
//     return token
// }
//^ currently not doing anything and keeping the flow going.
// business logic, doesnt have to do with ui code or api code. genral businiss logic - any kinds of calculations we need to do. 
// functionality that exisits in between. 
// this is were wwe will store infor for token

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    localStorage.setItem('token', token) // second arguement is token from above // set item - to put something in there
    return getUser()
}
// this a fetch request, which is why it is asynchrounous. or promises that you are getting back because you are using await.

export async function logIn(credentials) {
    const token = await usersAPI.logIn(credentials) // we need to make a request to the server to get a token
    localStorage.setItem('token', token) // second arguement is token from above // set item - to put something in there
    return getUser()
}

export function getToken() {
    const token = localStorage.getItem('token'); // if there is no token it will return null
    if(!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1])) // this parses just to chec the exp // checks if it is still valid after 24 hours
    if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        return null
    }
    return token; // reutrns a valid toekn
}

export function getUser() { // this checks the current token. if there is a valid token than you can grab toek. this extracts the user pbject
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
    localStorage.removeItem('token');
}

export async function checkToken() {
    const dateStr = await usersAPI.checkToken()
    return new Date(dateStr)
}