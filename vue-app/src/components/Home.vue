<template>
    <h1>Hello, Welcome to VueJS 3 CLI Component</h1>
   
    <!-- Tempate refs -->
    <!-- To enable dom manipulation (like in Javascript) to specified object -->
    <!-- usage example: -->
    <input  placeholder="Please input" disabled  class="w-150" ref="name"/>
    <el-button @click="handleClick" >Show Message</el-button> 
    <br>
    <!-- Click Event Modifiers  -->
    <!-- You can custom the click event by adding extra properties when clicking -->
    <!-- @click.rightclick -->
    <!-- @click.self - -->
    <!-- @click.shift - -->
    <!-- Code example -->
    <el-button @click.shift="alert('You Clicked on this button while holding Shift')">Hold On Shift Button and CLick</el-button>
    <!-- Props  -->
    <!-- Props is use to transfer data from parent component to child component -->
    <!-- @closed is a custom event which its trigger is called by Modal Component --> 
    <Modal :visible="showModal" :message="message" :title="title" :type="type" @closed="resetVisible" @success="resetVisible"/>
</template>
<script>
import Modal from './Modal.vue'
export default {
    name : 'Home',
    data()
    {
        return{
      showModal:false,
      message:'Hello,Welcome to My VUEJS Cli Page',
      title:'Welcome',
      type:'info'
        }
    },
    methods:{
     handleClick()
     {
        // using normal javascript DOM to template refs element
        // example
        this.$refs.name.placeholder="Fuck You Vuejs"
        this.showModal=true
     },
     resetVisible()
     {
        console.log('Opened Custom Event Called')
        this.showModal=false
        this.message='Hello,Welcome to My VUEJS Cli Page'
        this.title='Welcome'
        this.type='info'
        console.log('Current Show Modal Value '+ this.showModal )
     },
     alert(msg)
     {
      
       this.message=msg
       this.title='Notification'
       this.type='warning'
       this.showModal=true

     }
    },
    components: { 
        Modal
    }

}
</script>