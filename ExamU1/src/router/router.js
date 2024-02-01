import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [

  {
    path: "/",
    name: "inicio",
    component: () => import("../views/Inicio.vue"),
  },
  {
    path: "/formulario",
    name: "formulario",
    component: () => import("../views/Formulario.vue"),
  },
  {
    path:"/paginacion",
    name:"paginacion",
    component:()=> import("../views/Paginacion.vue")
  }
];
const router = new VueRouter({ routes });
export default router;
