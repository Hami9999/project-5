<template>
  <div class="w-full  h-112">
    <div class="text-left">
      <p class="text-2xl text-blue1 font-bold ml-5 mt-5">My Profile</p>
    </div>

    <UserInfoComponent  :getUser="getUser" />


  </div>
</template>

<script>
import '@/assets/tailwind.css';
import {mapGetters} from 'vuex'
import UserInfoComponent from "@/components/UserInfoComponent.vue";

export default {
  name: 'UserProfile',

  components: { UserInfoComponent},

  computed:{
    ...mapGetters('user', ['getUser']),
  },

  created() {},

  methods:{
  },
  mounted() {


  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
