import { token } from "morgan";
import { getToken } from "./users-service";

export default async function sendRequest (url, method = 'GET', payload = null) {
    //fetch asscepts an options objecy as the 2nd argu,ents used to include a data payload, set headers, specify the method, etc.
    const options = { method };
    if (payload) {
        options.headers = { 'Content-type': 'application/json' };
        options.body = JSON.stringify(payload);
    }

    const token = getToken();
    if (token) {
        //need to 
        options.headers ||= {};
        //this below is an older approach
        //? options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options)
    //if res.ok is false then somethign went wrong 
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}