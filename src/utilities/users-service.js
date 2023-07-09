//service modules export business/app logic e.g.  managing tokens, etc
//service modules depends on API modules for making AJAX requests to the server

import * as usersAPI from './users-api';


export async function signUp(userData) {
    //sign up expects tokens
    const token = await usersAPI.signUp(userData);
    //localstorage only stores strings, 
    localStorage.setItem('token', token);
    //TODO: return user object from token instead 
    return getUser();
}

export function logOut() {
    localStorage.removeItem('token');
}

export function getToken() {
    //get item will return null if the key (token) doesnt exist/expired
    const token = localStorage.getItem('token');
    if(!token) return null;
    //we know token is made of three parts separated by  a '.', we use JSON.parse to turn string into an object 
    const payload = JSON.parse(atob(token.split('.')[1]));
    //a JWT;s expiration is expressd in seconds, not ms.
    if(payload.exp * 1000 < Date.now()) {
        //token's expired
        localStorage.removeItem('token');
        return null;
    }
    return token;
}


export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}


export function checkToken() {
    // Just so that you don't forget how to use .then
    return usersAPI.checkToken()
      // checkToken returns a string, but let's 
      // make it a Date object for more flexibility
      .then(dateStr => new Date(dateStr));
  }


  export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
  }