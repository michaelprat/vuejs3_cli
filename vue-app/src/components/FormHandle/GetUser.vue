<template>
    <div class="register">
        <h1>Insert User Data</h1>

        <!-- @submit -->
        <!-- To enable form submit in vuejs -->
        <!-- !! if give attribute .prevent will make the page is not refreshed -->
        <el-form @submit.prevent="handleSubmit" :model="form" label-position="left" label-width="120px">
            <!-- V-model directive -->
            <!-- To perform 2 way binding -->
            <!-- To bind the user inputted data into data  -->
            <el-form-item label="Email">
                <el-input v-model="form.email" placeholder="Input Email" @blur="emailValidation"/>
            </el-form-item>
            <el-alert v-if="emailError" :title="emailError" type="error" :closable="false" show-icon />
            <el-form-item label="Password">
                <el-input v-model="form.password" type="password" placeholder="Input Password" show-password />
            </el-form-item>
            <el-form-item label="Occupation">
                <el-select v-model="form.job" :placeholder="form.job">
                    <el-option label="Programmer" value="Programmer" />
                    <el-option label="System Engineer" value="System Engineer" />
                    <el-option label="Translator" value="Translator" />
                    <el-option label="Teacher" value="Teacher" />
                    <el-option label="Doctor" value="Doctor" />
                    <el-option label="Architect" value="Architect" />
                    <el-option label="Police" value="Police" />
                    <el-option label="Musician" value="Musician" />
                    <el-option label="UnEmployed" value="UnEmployed" />
                </el-select>
            </el-form-item>
            <el-form-item label="Language">
                <el-checkbox-group v-model="form.language">
                    <el-checkbox label="Indonesian" value="Indonesian"></el-checkbox>
                    <el-checkbox label="English" value="English"></el-checkbox>
                    <el-checkbox label="Chinese" value="Chinese"></el-checkbox>
                    <el-checkbox label="Japanese" value="Japanese"></el-checkbox>
                    <el-checkbox :label="otherLanguage" :value="otherLanguage">
                        <el-input placeholder="other" width="50px" v-model="otherLanguage" />
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Hobby">
                <el-input placeholder="Insert your hobbies separate by ," width="50px" v-model="tempHobby"
                    @keyup="addHobby" />
            </el-form-item>
            <el-form-item label="Entered Hobby" v-show="form.hobbies.length > 0">

                <div class="hobbies" v-for="hobbies, counter in form.hobbies" key="hobbies" @click="deleteHobby(counter)">
                    {{ hobbies }}
                </div>
            </el-form-item>
            <el-form-item>
                <el-checkbox label="Accept The Terms and Condition" name="type" v-model="form.agreement" required />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">Submit</el-button>
                <el-button @click="dataReset">Reset</el-button>
            </el-form-item>
        </el-form>

        <p>Spoken Language:{{ form.language }}</p>

    </div>
    <Modal :visible="modalShow" :message="resetMessage" title="Reset Confirm" type="warning" @closed="resetVisible"
        @success="formReset" okMessage='Form Data Reseted'></Modal>
    <Modal :visible="errorModal" :message="errorMessage" title="Error" type="error" @closed="resetVisible"
        @success="resetVisible"></Modal>
</template>
<script>
import Modal from '../Modal.vue';
export default {
    name: 'GetUser',

    data() {
        return {
            otherLanguage: '',
            tempHobby: '',
            modalShow: false,
            errorModal: false,
            resetMessage: 'Reset All Inputted Data?',
            emailError: '',
            passwordError:'',
            jobError:'',
            hobbyError:'',
            languageError:'',
            agreementError:'',
            form: {
                email: '',
                job: '--select occupation--',
                password: '',
                agreement: false,
                language: [],
                hobbies: []

            },

        }
    },

    methods: {
        addHobby(e) {
            if (e.key === ',' && this.tempHobby) {
                this.tempHobby = this.tempHobby.replace(',', '')
                console.log(this.form.hobbies)
                console.log(this.tempHobby)
                console.log(this.form.hobbies.includes(this.tempHobby))
                if (!this.form.hobbies.includes(this.tempHobby)) {
                    this.form.hobbies.push(this.tempHobby)

                }
                this.tempHobby = ''
            }
            console.log(this.form.hobbies)
        },
        deleteHobby(index) {
            console.log(index)
            this.form.hobbies.splice(index, 1)
        },
        dataReset() {
            this.modalShow = true
        },
        formReset() {
            this.form.email = ''
            this.form.job = '--select occupation--'
            this.form.password = ''
            this.form.agreement = false
            this.form.language = []
            this.form.hobbies = []
            resetVisible()
        },
        resetVisible() {
            this.errorMessage = []
            this.modalShow = false
            this.errorModal = false
        },
        handleSubmit() {

            console.log('Form is being submitted')
       
            this.emailValidation()
            this.form.password > 6 ? '' :   this.errorMessage+='Password must be at least 7 characters long\n'
            if (this.errorMessage) {

                this.errorModal = true

            }

        },
        emailValidation() {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
               this.emailError='Invalid Email Address'
            } else {
                this.emailError=''

            }
             return
        }
    },
    components: {
        Modal

    }


}
</script>
<style >
.register {
    max-width: 520px;
    background-color: white;
    margin: 0 auto;
    padding: 40px;
    border-radius: 20px;
}

.form {
    max-width: 100%;



}

.hobbies {
    display: inline-block;
    padding: 6px 12px;
    margin: auto 3px;
    border-radius: 20px;
    color: grey;
    background: #eee;
}

body {
    background-color: grey;
}

label {
    text-align: left;
}
.el-alert{
      margin-bottom:20px;
}
</style>