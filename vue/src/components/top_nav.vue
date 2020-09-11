<template>
  <div>
    <div class="nav">
      <img class="nav-left" src="../assets/logo.png" alt="" />
      <img
        src="../assets/right_icon.png"
        alt=""
        class="nav-right"
        @click="getShowRight"
      />
    </div>
    <RightNav :isShow="isShow" @closeBox="toClose" />
  </div>
</template>

<script>
import RightNav from "@/components/right_nav";

export default {
  name: "top_nav",
  components: {
    RightNav,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    getShowRight() {
      this.isShow = true;
    },
    toClose(value) {
      this.isShow = value;
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 21.85vh;
  display: flex;
  justify-content: space-between;
  padding: 4.63vh 60px 0 60px;
  box-sizing: border-box;
}

.nav-left {
  width: 89px;
  height: 29px;
  background-size: cover;
}

.nav-right {
  width: 50px;
  height: 25px;
  background-size: cover;
  cursor: pointer;
}
</style>
