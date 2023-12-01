<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
           <img src="#"/>
        </el-carousel-item>
      </el-carousel>

</template>
<script>
export default {
    name:'CatGallery',
    data(){
        return {
         cats:[
            {
              image:'../assets/cat1.jpg'
            },
            {
              image:'../assets/cat2.jpg'     
            }
         ]
        }
    }
}

</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>