<template>
  <!-- Reaction Game start -->
   <!-- <h1>Reaction Game</h1>
   <br>
   <el-button @click="gameStart" :disabled="inGame">Game Start</el-button>
   <Block v-if="inGame" :delay="delay" @gameover="reset" ></Block>
   <Result v-if="playerScore!==0" :playerScore="playerScore"></Result> -->
   <!-- Reaction Game End -->

<!-- Form Handle Start -->
<GetUser></GetUser>
<!-- Form Handle End -->


  <!-- <FirstComponent/> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FirstComponent from './components/FirstComponent.vue';
import Block from './components/reflexes_game/Block.vue';
import Result from './components/reflexes_game/Result.vue';
import GetUser from './components/FormHandle/GetUser.vue';
export default {
  name: 'App',
  data(){
    return{
  // Reaction Game data Start
   inGame:false,
   delay:null,
   playerScore:0
  //  Reaction Game data End
    }
  },
  methods:{
    // Reaction Game Function Start
    gameStart()
    {
      this.delay=Math.floor(2000+Math.random() *5000)
      this.inGame=true
      this.playerScore=0
    
    },
    reset(reactionTime)
    {
    
      this.playerScore=reactionTime
      this.inGame=false
    }
    // Reaction Game Function End
  },
  components: {
    HelloWorld,
    FirstComponent,
    //Reaction Game Component
    Block,
    Result,
    //Reaction Game Component Start
    GetUser
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;   
}

</style>
