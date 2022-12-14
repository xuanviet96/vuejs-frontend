import Vue from "vue";
import VueRouter from "vue-router";
import UsersComp from "./components/UsersComp"
import UserEditComp from "./components/UserEditComp"
import NewUserComp from "./components/NewUserComp"
Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/users",
            component: UsersComp
            },
        {
            path: "/users/register",
            component: NewUserComp
            },
        {
            
            path: "/users/:id",
            component: UserEditComp
        },
       
    ]
    
});
