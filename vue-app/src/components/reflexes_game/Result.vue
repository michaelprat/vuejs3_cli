<template>
 <h2>Your Reaction Time:{{playerScore}} miliseconds</h2>
 <p class="rank">{{rank}}</p>
</template>
<script>
export default {
    name:'Result',
    props:[
        'playerScore'
    ],
    data(){
        return{
         rank:null
        }
    },
    mounted(){
        if(this.playerScore<250){
          this.rank='Wow!! What an GodSpeed Reaction'
        }
        else if(this.playerScore>=250 && this.playerScore<500)
        {
            this.rank='Pretty Fast Reaction'
        }
        else{
            this.rank='Snail Pace'
        }
    }
}
</script>

<style scoped>
.rank{
    font-size: 2.4em;
    color:aquamarine
}
</style>