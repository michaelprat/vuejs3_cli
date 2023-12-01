<template>
  <FirstComponent/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FirstComponent from './components/FirstComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    FirstComponent,
   
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;   

}
</style>
