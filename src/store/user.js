import axios from "axios";

export const user = {
    namespaced: true,

    state: {
        user: {
            id:'',
            email:'',
            name: '',
            password: '',
            token:''
        },
        token: {
            token: '',
        },
        books: [],
        events:[],
        SingleBook:[],
        SingleEvent:[]
    },
    actions: {
        registerUser :async (context,payload)=>{
            return await axios.post('register',payload)
                .then((response)=> {
                    return {message : response.data.message, success: true}
                })
                .catch(e => {
                    return {message : e.message, success: false}
                })
        },
        loginUser :async (context,payload)=>{
            await axios.post('login',payload)
                .then((response)=> {
                    localStorage.setItem('token',response.data.authorization.token);
                    context.commit('setToken',response.data.authorization);
                    context.commit('setUser',response.data);
                })
                .catch(e => {
                    console.log(e)
                })
        },

        usersLogout:context=>{
            context.commit('setUserLogout');
        },

        changeUsers:(context,payload)=>{
            context.commit('setUserKey',payload);
        },
        takeBooks:async context => {
            const response = await axios.get('books');
            context.commit('setBooks', response.data);
        },
        takeEvents:async context => {
            const response = await axios.get('events');
            context.commit('setEvents', response.data);
        },
        takeSingleBook :async (context,payload)=>{
            await axios.get(`book/${payload}`)
                .then((response)=> {
                    context.commit('setSingleBook',response.data);
                })
                .catch(e => {
                    console.log(e)
                })
        },
        takeSingleEvent :async (context,payload)=>{
            await axios.get(`event/${payload}`)
                .then((response)=> {
                    context.commit('setSingleEvent',response.data);
                })
                .catch(e => {
                    console.log(e)
                })
        },
    },

    mutations: {

        setToken(state, payload) {
            state.token.token = payload.token;
        },
        setUser (state, payload) {
            state.user = payload.user;
            localStorage.setItem('user',payload.user);
        },
        setUserKey (state, payload) {
            state.user[payload.key] = payload.value;
        },
        setUserLogout (state) {
            state.user = "";
            state.user = {
                id:'',
                email:'',
                name: '',
                password: '',
                token:''
            };
            state.token = "";
            localStorage.removeItem('token');
        },
        setBooks(state, payload) {
            state.books = payload;
        },
        setEvents(state, payload) {
            state.events = payload;
        },
        setSingleBook(state, payload) {
            state.SingleBook = payload;
        },
        setSingleEvent(state, payload) {
            state.SingleEvent = payload;
        },
    },

    getters: {
        getUser(state){
            return state.user;
        },
        getUserId(state) {
            return state.user.id;
        },
        getTokens(state) {
            return state.token;
        },
        getBooks(state) {
            return state.books;
        },
        getEvents(state) {
            return state.events;
        },
        getSingleBook(state) {
            return state.SingleBook;
        },
        getSingleEvent(state) {
            return state.SingleEvent;
        },
    }
};