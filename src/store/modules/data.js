import axios from "axios";

const store = {
    state: {
        users: [],
        userPosts: [],
        postComments: []
    },
    getters: {},
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
                    commit('SET_POSTS', { posts: response.data, id })
                })

        },
        getComments({ commit }, id) {
            axios.get(`https://jsonplaceholder.typicode.com/comments`)
                .then( response => {
                    commit('SET_COMMENTS', { comments: response.data, id})
                })
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_POSTS(state, { posts, id}) {
            state.userPosts = posts.filter((post) => post.userId === parseInt(id))
        },
        SET_COMMENTS(state, { comments,id}) {
            state.postComments = comments.filter((comment) => comment.postId === parseInt(id));
        }
    }

}

export default store;
