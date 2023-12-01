<template>
    <!-- <el-button @click="open">Click to open the Message Box</el-button> -->
</template>
<script>

import { ElMessage, ElMessageBox, ElButton } from 'element-plus'
export default
    {
        name: 'Modal',
        data() {
            return {
                dialogVisible: true
            }
        },
        props:[
            'title',
            'message',
            'visible',
            'type'
        ],
        methods: {
            open() {
                ElMessageBox.confirm(
                    (this.message ? this.message:'Modal Created using Element UI'),
                    (this.title ? this.title :'Title of Modal'),
                    {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        type: (this.type? this.type:'info'),
                    }
                )
                    .then(() => {
                        ElMessage({
                            type: 'success',
                            message: 'Welcome to vuejs3 CLI',
                        })
                    // $emit is to trigger custom events in parent component 
                    // example:
                    this.$emit('closed')
                    })
                    .catch(() => {
                        // ElMessage({
                        //     type: 'info',
                        //     message: 'Delete canceled',
                        // })
                     // $emit is to trigger custom events in parent component example
                     this.$emit('closed')
                  
                    })
            }
        },
        components:
        {
            ElMessage,
            ElMessageBox,
            ElButton
        },
        computed:{
          
        },
        // Watch:
        // A function to detect change to the props/data in a component
        // example of usage
        watch:{
            visible:function(newVal,OldVal)
            {
                if(newVal===true)
                {
                    this.open()
              
                }
            }
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS style  to this component only -->
<style scoped>

</style>