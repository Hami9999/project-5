<template>
  <div class="w-full  h-112">
    <div class="text-left">
      <p class="text-2xl text-blue1 font-bold ml-5 mt-5">Single event</p>
    </div>

    <EventSingleComponent/>

  </div>
</template>

<script>
import '@/assets/tailwind.css';
import EventSingleComponent from "@/components/EventSingleComponent.vue";


export default {
  name: 'EventView',

  components: {EventSingleComponent},

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
