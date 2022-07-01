import Vue from "vue";
import Router from "vue-router";
import Bienvenido from "./vistas/Bienvenido";
import BuscarHeroe from "./vistas/personaje/BuscarHeroe";
import PerfilHeroe from "./vistas/personaje/PerfilHeroe";

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