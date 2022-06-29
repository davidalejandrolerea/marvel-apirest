import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome";
import BuscarHeroe from "./views/character/BuscarHeroe";
import PerfilHeroe from "./views/character/PerfilHeroe";

Vue.use(Router);

const routesObject = [
    {
        path: "/",
        name: 'welcome',
        component: Welcome,
        props: true,
    },
    {
        path: "/heroes",
        name: 'heroes.search',
        component: BuscarHeroe,
        props: true,
    },
    {
        path: "/heroes/profile",
        name: 'heroes.profile',
        component: PerfilHeroe,
        props: true,
    },
];

const router = new Router({
    mode: "history",
    routes: routesObject
});

export default router;