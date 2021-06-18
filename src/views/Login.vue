<template>
    <h2><b><u>Login:</u></b></h2>

    <div class="loginform">
        <form @submit="formSubmit" class="add-form">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user_email">
                
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="user_pass">
            </div>
            <button type="submit" class="btn btn-dark">Submit</button>
        </form>
    </div>

</template>

<script>

export default{
    name:'Login',
    data(){
        return{
            user_email:'waziullah@live.com',
            user_pass:'123456',   
        }
    },
    methods:{
        formSubmit(){
            console.log("Form submitted!")

            if(this.user_email=='' || this.user_pass==''){
                alert('Please fill up the form')
            }
            else {
                var user={email:this.user_email.toString(), pass:this.user_pass.toString()}

                let result=this.$store.dispatch('auth/loginUser',user)
                
                if(result){
                    this.$router.push('home');
                }
                else{
                    alert('Credentials not working. Please try again!')
                    this.user_email='';this.user_pass=''
                };
            };
        }
    }
}
</script>

<style scoped>
    .loginform{
        margin:auto;
        padding: 80px;
        max-width: 800px;
    }
</style>