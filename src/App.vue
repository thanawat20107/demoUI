<template>
  <v-app>
    <Navbar />
    <v-main class="mx-5 my-4">  
     <!--  <Dashboard/>
      -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./views/Navbar";
 /* import Dashboard from "./views/Dashboard"; 
 import Profile from "./views/Profile";
import Project from "./views/Project";  */
export default {
  name: "App",

  components: { /* Dashboard, */ Navbar,/* Profile ,Project */},

  data: () => ({
    //
  }),
};
</script>
