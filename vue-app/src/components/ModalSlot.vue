<template>
    <!-- Teleport -->
    <!-- To move the rendering place of template to html -->
    <!-- example code -->
    <!-- <teleport to="nameofclass">
       template content... 
    </teleport>
     -->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <slot>

            </slot>
            <div class="content">
            <slot name="content">

            </slot>
           </div>
        </div>
      </div>

</template>

<script>
export default{
    name:'ModalSlot',
    methods:{
        closeModal()
        {
            this.$emit('Closed')
        }

    }

}
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
</style>