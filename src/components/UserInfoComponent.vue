<template>
  <div class="flex min-h-[350px]  w-113 border border-grey2 m-auto mt-5 items-center">
    <div class="w-3/4 h-64 border-r border-grey2 ">
      <div class="w-full text-left">
        <p class="font-bold text-xl text-blue1 ml-5">User Information</p>
      </div>

      <div class="w-full flex-wrap flex ">

        <InputComponent label="Name"
                        :input-value="getUser.name"
                        typeKey="firstName"
                        @change="changeInput"/>

        <InputComponent label="Email"
                        input-div-class="w-109 text-left"
                        input-type="email"
                        :input-value="getUser.email"
                        typeKey="email"
                        @change="changeInput"/>
      </div>
    </div>
    <div class="w-1/4 h-64">
      <div class="w-full text-left">
        <p class="font-bold text-base text-blue1 ml-5">My personal token</p>
      </div>
      <div class="flex w-full">

        <InputComponent label="Your token"
                        img-class="w-5 h-5 rounded  ml-6 mt-1 block"
                        :input-value="getTokens.token"
                        typeKey="slackUserName"
                        input-class="text-black font-normal text-sm tracking-wider
                                   w-56 h-8  border-b border-grey2 outline-none ml-2"/>

      </div>
      <button @click="logout" class="bg-grey3 text-white w-28 h-9 rounded tracking-widest	mt-8 ml-auto	font-medium text-sm	">LOGOUT</button>

    </div>

  </div>

</template>

<script>

import InputComponent from "@/components/InputComponent.vue";
import {mapGetters} from "vuex";

export default {
  name: "UserInfoComponent",
  components: { InputComponent },

  props: {
    getUser: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters('user', ['getTokens']),
  },
  methods: {
    logout() {
      this.$store.dispatch("user/usersLogout");
      this.$router.push({path: "/"});
    },
    changeInput(data) {
      this.$store.dispatch("user/changeUsers",data);
      console.log(data);
    }
  }
};
</script>
<style scoped>

</style>
