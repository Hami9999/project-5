<template>
  <div class="w-full  h-112">
    <div class="text-left">
      <p class="text-2xl text-blue1 font-bold ml-5 mt-5">All Books</p>
    </div>

   <UserBookComponent/>

  </div>
</template>

<script>
import '@/assets/tailwind.css';
import UserBookComponent from "@/components/UserBookComponent.vue";


export default {
  name: 'UserProfile',

  components: {UserBookComponent},

  computed:{

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
