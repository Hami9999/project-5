import axios from "axios";
// import store from "@/store";
import router from './router'
import store from "@/store";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

axios.interceptors.response.use(function (response) {
    return response
}, async function (error) {
    if (error.response.status === 401) {
        store.dispatch("user/usersLogout");
        router.push('/')

    } else if (error.response.status === 400) {
        console.log('Email not found')
    } else if (error.response.status === 422) {
        console.log('The email has already exist');
        router.push('/')
    }
    return Promise.reject(error)
})



