<template>
  <div class="project">
    <h1 class="headline">โปรเจคเดือนมกราคม</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 >
        <v-expansion-panel >
          <v-expansion-panel-content v-for="(item, index) in projects" :key="index">
            <div slot="header">{{item.title}}</div>
            <v-card flat class="text-center ma-2">
            <v-responsive>
              <img :src="item.pic" />
            </v-responsive>
           
            <v-card-text class="subheading">{{item.title}}</v-card-text>
          
          </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
          
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name,
  data() {
  return {
    
    projects:[
      {title:"ระบบจองโต๊ะร้านชาบู",pic:"s1.jpg"},
      {title:"ระบบชำระเงินออนไลน์",pic:"s2.jpg"},
      {title:"ระบบเติมของ",pic:"s3.jpg"},
      {title:"ระบบสุ่มอาหาร",pic:"s4.jpg"},
        {title:"ระบบตรวจบะตรพนังงาน",pic:"s5.jpg"},
     
    ]
  }
},
};
</script>

