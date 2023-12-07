<template>
<div class="block" v-if="showBlock" @click="stopTimer">
    Click Me 
</div>

</template>

<script>
export default {
 name:'Block',
 data(){
    return{
       showBlock:false,
       timer:null,
       reactionTime:0,
    }

 },
 props:[
    'delay'
 ],
//  LifeCycle Hook in Vuejs
// mounted() -- fired when the component is being called
mounted()
{
    console.log('Block Component is mounted')
    setTimeout(()=>
    {
      this.showBlock=true
      this.startTimer()
    },this.delay)
   
},
// updated() -- fired when the data/props inside the component changed
updated() {

    console.log('Component Updated')
    console.log('Current Reaction Time:'+this.reactionTime)
    
},
// unmounted() -- fired when the component is being unmounted(disrendered)
unmounted(){
    console.log('Component is unmounted')
    this.reactionTime=0
},
methods:{
   startTimer(){
    this.timer=setInterval(()=>{
      this.reactionTime+=10
      console.log('Current Reaction Time'+this.reactionTime)
    },10)

   },
   stopTimer(){
    clearInterval(this.timer)
    this.$emit('gameover',this.reactionTime)
    this.reactionTime=0
   }
}
}
</script>

<style scoped>
.block{
    width: 300px;
    border-radius: 20px;
    background: #0faf87;
    color:white;
    text-align: center;
    padding:100px 0;
    margin:40px auto;
}
</style>