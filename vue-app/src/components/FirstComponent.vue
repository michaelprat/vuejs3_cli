<!-- Every Vue Component Consist of 3 parts -->
<!-- #1 <template>html code....</template> -->
<!-- in this part consist of html code which render when this component is called -->
<template>
    <div class="common-layout">
    <el-container>
    <el-header>
        <Header @getPage="(page)=>setPage(page)"/>
    </el-header>
    <el-main>
     <Home v-if="isHome"/>
     <CatGallery v-if="isCatGallery"/>
      <SlotPage v-if="isSlotPage">
         <h1>Slot Page Example</h1>
         <template v-slot:article>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima pariatur ipsum reiciendis! Doloribus minus quos possimus incidunt beatae ut sapiente magni at, accusamus harum hic omnis, aliquam nesciunt eligendi!
         Deserunt natus, quod rerum, amet, illo fugiat similique praesentium iusto quos eligendi distinctio ducimus nostrum est libero suscipit magni iure mollitia commodi minima. Molestias pariatur est dignissimos dolorem in magni?</p>
        </template>
      </SlotPage>
      <br>
      <br>
     
    </el-main>
    </el-container> 
   </div>
</template>
<!-- #2 <script> </script>-->
<!-- in this part consist a javascript script to import and export this component -->
<!-- also contains the data,method,compute (just like in cdn) -->
<script>
 import Modal from './Modal.vue'
 import Header from './Header.vue'
 import Home from './Home.vue'
 import CatGallery from './CatGallery.vue';
import SlotPage from './SlotPage.vue';

export default {
    name : 'FirstComponent',
    data()
    {
        return{
            isHome:true,
            isCatGallery:false,
            isSlotPage:false,
        }
    },
    components: {
    Modal,
    Header,
    Home,
    CatGallery,
    SlotPage,
   
},
    methods:{
        resetPage()
        { 
            this.isHome=false
            this.isCatGallery=false
            this.isSlotPage=false

        },
        setPage(page)
        {
          switch(page){
            case 'CatGallery':
                this.resetPage()
                this.isCatGallery=true
                break;
            case 'Slot':
                this.resetPage()
                this.isSlotPage=true
                break;
            // case  '':
            //      break;
            default:
                this.resetPage()
                this.isHome=true
                break;
          }
        }
    }
};
</script>



<!-- #3 <style></style> -->
<!-- Consist of css that applicable into html code inside this component -->
<style scoped>
.w-150{
    width:150px;
}
.mainPage{
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>