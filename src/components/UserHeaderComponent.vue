<template>
  <div class="w-80 h-auto bg-blue1 ">
    <img @click="back" class="w-6 h-6 m-auto mt-6 cursor-pointer" src="../assets/menu.png">
    <img @click="events" class="w-6 h-6 m-auto mt-6 cursor-pointer" src="../assets/Schedule.png">
    <span class="text-white">Events</span>
    <img @click="books" class="w-6 h-6 m-auto mt-6 cursor-pointer" src="../assets/Patient.png">
    <span class="text-white">Books</span>
  </div>

</template>

<script>

export default {
  components: {},
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {
    back() {
      this.$router.push({path: "/user-profile"});
    },
    events() {
      this.$router.push({path: "/events"});
    },
    books() {
      this.$router.push({path: "/books"});
    },
  }
};
</script>
<style scoped>

</style>
