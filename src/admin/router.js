import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/admin',
        component: () => import("./components/pages/aboutme.vue"),
    },
    {
        path: '/works',
        component: () => import("./components/pages/works.vue"),
    },
    {
        path: '/reviews',
        component: () => import("./components/pages/reviews.vue"),
    }
];

export default new VueRouter({ routes, mode: "history" });