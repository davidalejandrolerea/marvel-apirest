import Vue from "vue";
import Router from "vue-router";
import Bienvenido from "./views/Bienvenido";
import BuscarHeroe from "./views/character/BuscarHeroe";
import PerfilHeroe from "./views/character/PerfilHeroe";

Vue.use(Router);

const routesObject = [
    {
        path: "/",
        name: 'bienvenido',
        component: Bienvenido,
        props: true,
    },
    {
        path: "/heroes",
        name: 'heroes.search',
        component: BuscarHeroe,
        props: true,
    },
    {
        path: "/heroes/perfil",
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