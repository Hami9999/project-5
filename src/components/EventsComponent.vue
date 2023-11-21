<template>
  <div class="w-113 min-h-[350px] border border-grey2 m-auto mt-5 items-center">
    <div class="w-full " >
      <div class="container">
        <div class="row">
          <div class="col-sm-4"  v-for="(event, index) in getEvents" :key="index">
            <div class="box-container" >
              <router-link :to="{name:'event', params: {id:event.id}}">
                <h4 class="box-title">Event Name: <span class="text-grey1"> {{event.name}}</span></h4>
                <h6 class="box-title">Event User Id:  <span class="text-grey1">{{event.user_id}}</span></h6>
                <div class="box-heading text-uppercase"> Location: <span class="text-grey1"> {{event.location}}</span> </div>
              <div class="box-btns">
                <a class="btn btn-primary text-uppercase">Event Publish Date: <span class="text-grey1"> {{event.date}} </span></a>
              </div>
                <div class="box-id">Event id:  <span class="text-grey1">{{event.id}}</span></div>
              </router-link>
            </div>
          </div>



        </div>
      </div>

    </div>
  </div>
</template>



<script>





import {mapGetters} from "vuex";

export default {
  name: "EventsComponent",
  components: {  },

  props: {

  },
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters('user', ['getEvents']),
  },
  methods: {


  }
};
</script>

<style scoped>
.box-container {
  text-align:center;
  width:100%;
  border: 1px solid #999;
  margin: 25px 0;
  margin-top: 50px;
  padding: 6px 15px 0;
  .box-id {
    background-color: #eee;
    display:block;
    padding:6px 15px;
    margin-top: 10px;
  }
  .box-img {
    margin-top: -35px;
    position: relative;
  }
  .box-price {
    display:inline-block;
    background-color: #3498db;
    border-radius: 0px;
    padding:4px 10px;
    margin: 15px auto 0;
    color:#fff;
    position:absolute;
    top:0;
    left:0;

  }
  .box-title {
    font-size: 14px;
    font-weight:bold;
  }
  .box-heading {
    margin: 10px 0;
  }
  .btn {
    font-size: 13px;
  }
  img {
    display:block;
    max-width:100%;
  }

}
</style>
