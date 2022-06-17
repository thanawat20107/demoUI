<template>
<div id="dashboard">
   <h1 class="grey--text">Dashboard</h1>
   <v-container grid-list-xs >
    <div class="my-4">
     
         <!--  tooltip project -->
       <v-tooltip bottom class="primary">
         <template v-slot:activator="{ on, attrs }">
         <v-btn
         small
         
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
         @click="sortBy('title')"
        >
        <v-icon small left>mdi-folder</v-icon>
            <span class="caption text-lowercase">project</span>
        </v-btn>
        </template>
        <span>เรียงตามชื่อโปรเจค</span>
       </v-tooltip>
        <!--  tooltip team -->
       <v-tooltip bottom class="success">
         <template v-slot:activator="{ on, attrs }" >
         <v-btn 
        small
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
         @click="sortBy('team')"
        >
        <v-icon small left>mdi-account-group</v-icon>
          <span class="caption text-lowercase">team</span>
        </v-btn>
        </template>
        <span>เรียงตามชื่อทีมงาน</span>
       </v-tooltip>
       <!--  tooltip status -->
         <v-tooltip bottom color="warning">
         <template v-slot:activator="{ on, attrs }">
         <v-btn
         small
          color="warning"
          dark
          v-bind="attrs"
          v-on="on"
          @click="sortBy('status')"
        >
        <v-icon small left>mdi-contactless-payment</v-icon>
         <span class="caption text-lowercase">status</span>
        </v-btn>
        </template>
        <span>เรียงตามต่าสเตตัส</span>
       </v-tooltip>
 <!--  tooltip ปิด -->
         </div>
     <v-card class="pa-3" v-for="(item, i) in projects"  :key="i" >
         <v-layout row wrap > <!-- wrap : ขึ้นแถวใหม่ -->
      <v-flex xs12 md6>    <!-- xs : iphone  md : com notebook pc -->
       <div class="caption grey--text">ชื่อโปรเจค</div>
       <div>{{item.title}}</div>
      </v-flex>
      <v-flex xs6 md3>    <!-- xs : iphone  md : com notebook pc -->
         <div class="caption grey--text">ทีม</div>
         <div>{{item.team}}</div>
      </v-flex>
       <v-flex xs6 md3>    <!-- xs : iphone  md : com notebook pc -->
         <div class="caption grey--text">การดำเนินงาน</div>
         <div><v-chip :class="item.code" close>{{item.status}}</v-chip></div> <!--  :class="item.code" = พาสสีมาในปุ่ม -->
      </v-flex>

      
    </v-layout>
       </v-card>
  
  </v-container>
</div>
</template>

<script>
 export default{
name,
data() {
  return {
    
    projects:[
      {title:"ระบบจองโต๊ะร้านชาบู",team:"กอกล้วยโมแกรมเปอร์",status:"กำลังดำนินการ" , code:"warning"},
      {title:"ระบบชำระเงินออนไลน์",team:"แอลฟ่า",status:"สมบูรณ์",code:"success"},
      {title:"ระบบเติมของ",team:"แบลต้า",status:"กำลังดำนินการ",code:"warning"},
      {title:"ระบบสุ่มอาหาร",team:"แกรมม่า",status:"สมบูรณ์",code:"success"},
        {title:"ระบบตรวจบะตรพนังงาน",team:"เลล้า",status:"ทิ้งงาน",code:"error"},
     
    ]
  }
},
methods: {
  sortBy(props){
this.projects.sort((a,b)=>a[props]<b[props]?-1:1)
  }
},
 }
</script>
