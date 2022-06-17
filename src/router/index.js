import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";
import Navbar from "../views/Navbar";
import Profile from "../views/Profile";
import Project from "../views/Project";
import Money from "../views/Money";
import Team from "../views/Team";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/project',
    name: 'ProFile',
    component: Project
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
  path: '/team',
  name: 'team',
  component: Team
},
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
