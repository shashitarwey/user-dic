import Vue from "vue";
import VueRouter from "vue-router";
import AppHome from "../components/AppHome";
import Comments from "../components/Comments";
import Posts from "../components/Posts";

Vue.use(VueRouter);


const routes = [
    {
        path: "/",
        name: "AppHome",
        component: AppHome
    },
    {
        path: "/comments/:id",
        name: "Comments",
        component: Comments,
        props: true
    },
    {
        path: "/posts/:id",
        name: "Posts",
        component: Posts,
        props: true
    }
]

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;