import axios from "axios";

const store = {
    state: {
        users: [],
        userPosts: [],
        postComments: []
    },
    getters: {
        getAllUser: (state) => state.users,
        getUserComments: (state) => state.postComments,
        getUserPosts: (state) => state.userPosts,
    },
    actions: {
        getUsers({ commit }) {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then( response => {
                    commit('SET_USERS', response.data)
                })
        },
        getPosts({ commit },id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then( response => {
                    commit('SET_POSTS', {data: response.data, id})
                })

        },
        getComments({ commit }, id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then( response => {
                    commit('SET_COMMENTS',response.data)
                })
        },
    },
    mutations: {
        SET_USERS(state, data) {
            state.users = data;
        },
        SET_POSTS(state, { data, id}) {
            state.userPosts = data.filter((post) => post.userId === parseInt(id))
        },
        SET_COMMENTS(state, data) {
            state.postComments = state.comments = data;
        }
    }

}

export default store;
