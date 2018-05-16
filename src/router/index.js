import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import TecnicalForm from "@/components/TecnicalForm";
import FichaTecnica from "@/components/FichaTecnica";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/form",
            name: "TecnicalForm",
            component: TecnicalForm
        },
        {
            path: "/fichaTecnica",
            name: "FichaTecnica",
            component: FichaTecnica
        }
    ]
});
