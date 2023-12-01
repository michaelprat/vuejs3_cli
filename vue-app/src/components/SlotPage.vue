<template>
    <!-- Slot -->
    <!-- Placeholder for the Parent Component <template> -->
    <!-- is used to accept <html> tag(<template>) from parent component -->
        <!-- See the FirstComponent.vue -->
   
    <slot>
    
   </slot>
   <div class="article">
    <slot name="article">

    </slot>
   </div>
   <br>
   <el-button @click="showModalSlot">Show Modal Slot</el-button>
   <ModalSlot>
     
     <template v-slot="content">
     </template>
   </ModalSlot>

</template>
<script>
import ModalSlot from './ModalSlot.vue';

export default {
    name: 'SlotExample',
    data() {
    },
    components: { ModalSlot }
}

</script>
<style scoped>
.article{
    text-align: center;
    display: flex;
    justify-content: center;
    width: 50%;
    border:2px solid black;
}

</style>

