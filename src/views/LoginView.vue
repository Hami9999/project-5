<template>
  <div class="w-1/2 grid items-center">
    <div class="w-96 h-28  text-left grid m-auto mt-auto">
      <h2 class="font-bold text-2xl text-rega1">Login</h2>
      <h4 class="font-normal text-xs tracking-tighter text-grey1 mt-10">Enter your email</h4>
      <div v-if="errorEmail" class="mt-3 w-96 h-11 flex items-center bg-pink-100 ">
        <img class="w-5 h-5 ml-2" src="../assets/Vector.png">
        <p class="ml-2 font-normal text-sm leading-5 tracking-tight text-red1 rounded">Please enter a valid email address</p>
      </div>
      <input type="email" class="outline-none border-b-2 p-1 " v-model="email" required>
      <h4 class="font-normal text-xs tracking-tighter text-grey1 mt-10">Enter your password</h4>
      <input type="password" class="outline-none border-b-2 p-1 " v-model="password" required>
      <button @click="login" class="bg-grey3 text-white w-28 h-9 rounded tracking-widest	mt-8 ml-auto	font-medium text-sm	">Login</button>
      <nav>
        <router-link to="/">Register</router-link> |
        <router-link to="/Login">login</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import '@/assets/tailwind.css';


export default {
  name: 'loginView',
  data() {
    return {
      email: '',
      password:'',
      errorEmail: false
    }
  },
  components: {},
  computed:{
    // data:{
    //   email:this.$store.state.user.email,
    // }
  },
  methods:{
    login (){
      if (!this.email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.errorEmail = true;
        return;
      } else {
        let payload = {
          email: this.email,
          password: this.password,
        }
        this.errorEmail = false;
        this.$store.dispatch("user/loginUser",payload);
        this.$router.push({path: "/user-profile"});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
