import axios from "axios";

const API = axios.create({
    baseURL: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail'
});

API.interceptors.request.use(function (config) {
    config.headers['X-RapidAPI-Key'] = 'b9a46f05bemsh0b149a05c8d9259p1927dfjsn046a20d73432'
    config.headers['X-RapidAPI-Host'] = 'rapidprod-sendgrid-v1.p.rapidapi.com'
    config.headers['content-type'] = "application/json"
    config.headers.ContentType = "application/json"
    return config
}), function (error) {
    return Promise.reject(error)
}

API.interceptors.response.use(function (response) {
    return response?.data
}), function (error) {
    return Promise.reject(error)
}

export const PostData = (data) => API.post('/send', data)