<template>
  <div class="w-full  h-112">
    <div class="text-left">
      <p class="text-2xl text-blue1 font-bold ml-5 mt-5">All Events</p>
    </div>
   <EventsComponent/>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import EventsComponent from "@/components/EventsComponent.vue";



export default {
  name: 'EventsView',

  components: {EventsComponent},

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
