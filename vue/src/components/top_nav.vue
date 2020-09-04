<template>
  <div>
    <div class = "nav">
      <div class = "nav-left"></div>
      <div class = "nav-right" @click = "getShowRight"></div>
    </div>
    <div v-if = "isShow">
      <RightNav :isShow = "isShow"  />
    </div>
  </div>

</template>

<script>
  import RightNav from '../components/right_nav';

  export default {
    name: "top_nav",
    components: {
      RightNav,
    },
    data() {
      return {
        isShow: false,
        message: 'hello world'
      }
    },
    methods: {
      getShowRight() {
        this.isShow = true;
        console.log(this.isShow);
      }
    }
  }
</script>

<style scoped>
  .nav {
    width: 100%;
    /*height: 80px;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 60px;
    box-sizing: border-box;
    border: 1px red solid;

  }

  .nav-left {
    width: 89px;
    height: 29px;
    border: 1px red solid;

  }

  .nav-right {
    width: 50px;
    height: 25px;
    border: 1px red solid;
  }

  .aa {
    color: red;
  }


</style>
