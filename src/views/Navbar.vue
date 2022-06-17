<template>
  <nav>
    <v-app-bar color="cyan lighten-1" dense dark elevation="13">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>THANAWAT DELIVERY</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="cyan lighten-1">
        <v-icon left>mdi-heart</v-icon>
        <span>หน้าแรก</span>
      </v-btn>

      <v-btn class="cyan lighten-1">
        <v-icon left>mdi-magnify</v-icon>
        <span>ประวัติการใช้งาน</span>
      </v-btn>

      <v-btn class="cyan lighten-1">
        <v-icon left>mdi-exit-to-app</v-icon>
        <span>ออกจากระบบ</span>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
       <v-list dense>
      <v-subheader>Detail</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name,
  data: () => ({
    drawer: false,
    group: null,
     selectedItem: 1,
      items: [
        { text: 'แดชบอร์ด', icon: 'mdi-view-dashboard',route:"/" },
        { text: 'ข้อมูลโปรไฟล์', icon: 'mdi-account-circle',route:"/profile" },
        { text: 'โปรเจค', icon: 'mdi-folder',route:"/project" },
        { text: 'รายรับ-รายจ่าย', icon: 'mdi-cash-multiple' ,route:"/money"},
         { text: 'ทีมงาน', icon: 'mdi-account-group' ,route:"/team"},
      ],
  }),
};
</script>

<style>
</style>