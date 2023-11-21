<template>
  <div class="w-1/2 grid items-center">
    <div class="w-96 h-110 mt-8 text-left grid m-auto mt-auto">
      <h2 class="font-bold text-2xl text-rega1">Register</h2>
      <h4 class="font-normal text-xs tracking-tighter text-grey1 mt-10">Enter your email</h4>
      <div v-if="errorEmail" class="mt-3 w-96 h-11 flex items-center bg-pink-100 ">
        <img class="w-5 h-5 ml-2" src="../assets/Vector.png">
        <p class="ml-2 font-normal text-sm leading-5 tracking-tight text-red1 rounded">Please enter a valid email address</p>
      </div>
      <input type="email" class="outline-none border-b-2 p-1 " v-model="email" required>
      <h4 class="font-normal text-xs tracking-tighter text-grey1 mt-10">Enter your name</h4>
      <input type="text" class="outline-none border-b-2 p-1 " v-model="name" required>
      <h4 class="font-normal text-xs tracking-tighter text-grey1 mt-10">Enter your password</h4>
      <input type="password" class="outline-none border-b-2 p-1 " v-model="password" required>
      <button @click="register" class="bg-grey3 text-white w-28 h-9 rounded tracking-widest	mt-8 ml-auto	font-medium text-sm	">Register</button>
      <nav>
        <router-link to="/">Register</router-link> |
        <router-link to="/Login">login</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';



export default {
  name: 'homeView',
  data() {
    return {
      email: '',
      name:'',
      password:'',
      errorEmail: false
    }
  },
  components: {},
  computed:{

  },
  methods:{
    async   register (){
      if (!this.email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.errorEmail = true;
        return;
      } else {
        let payload = {
          name:this.name,
          email: this.email,
          password: this.password,
        }
        const result = await this.$store.dispatch("user/registerUser",payload);
        toast.success(result.message)
        if (result.success === true){
          setTimeout(() => {
            this.$router.push({path: "/login"});
          }, 2000);
        }else {
          setTimeout(() => {
            toast.success("The email has already exist")
            this.$router.push({path: "/"});
          }, 2000);
        }

        this.errorEmail = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
