<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
    >
      <el-menu-item index="0">
        <img
          style="width: 100px;height:100px; padding-bottom:20px;"
          src="../assets/logo.png"
          alt="Element logo"
        />
        <h2>VUE CLi</h2>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1" @click="pageLink('Home')">Home</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Random Page</template>
        <el-menu-item index="2-1" @click="pageLink('CatGallery')">Cat Gallery</el-menu-item>
        <el-menu-item index="2-2" @click="pageLink('Slot')">Slot Page</el-menu-item>
        <el-menu-item index="2-3">Random item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>Random item four</template>
          <el-menu-item index="2-4-1">Random sub item one</el-menu-item>
          <el-menu-item index="2-4-2">Random sub item two</el-menu-item>
          <el-menu-item index="2-4-3">Random sub item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </template>

<script>
export default {
    name:'Header',
    methods:{
       
        pageLink(page){
            this.$emit('getPage',page)
        }
    }

}

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>