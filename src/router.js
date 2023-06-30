import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';



const router = createRouter({
    history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/blog',
                name: 'posts',
                component: PostList
            },
            {
                path: '/blog/:slug',
                name: 'post',
                component: SinglePost
            },
            {
                path: '/contact',
                name: 'contact',
                component: () => import("./pages/contact.vue")
            },
            {
                path: "/:pathMatch(.*)*",
                name: 'not-found',
                component: NotFound
            },
        ]
    });
export { router };