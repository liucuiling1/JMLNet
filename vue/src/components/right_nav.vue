<template>
  <transition>
    <div :class="[isShow ? 'right_nav nav-enter' : 'right_nav nav-leave']">
      <div class="right_nav_close" @click="getClose">
        <img class="right_nav_close_img" src="../assets/close.png" alt="" />
      </div>
      <div class="right_nav_list">
        <div
          class="right_nav_list_li"
          v-for="(item, index) in navList"
          v-bind:key="index"
          @click="getPath(index)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "right_nav",
  props: {
    isShow: {
      type: Boolean,
    },
  },
  data() {
    return {
      navList: ["首页", "设计", "技术"],
    };
  },

  methods: {
    // 关闭窗口
    getClose() {
      // 触发closeBox方法，向父组件传递的数据
      this.$emit("closeBox", false);
    },
    // 点击跳转
    getPath(index) {
      switch (index) {
        case 0:
          this.$router.replace("/");
          break;
        case 1:
          this.$router.replace("/design");
          break;
        case 2:
          this.$router.replace("/tec");
          break;
      }
    },
  },
};
</script>

<style scoped>
.right_nav {
  width: 400px;
  height: 100vh;
  background: #ffffff;
  position: fixed;
  top: 0;
  right: -400px;
  z-index: 2;
}

.right_nav_close {
  width: 100%;
  padding: 50px 59px 50px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15.09vh;
}

.right_nav_close_img {
  width: 37px;
  height: 37px;
  cursor: pointer;
  background-size: 100% 100%;
}

.right_nav_list {
  width: 100%;
  height: 40.74vh; /*440px */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  box-sizing: border-box;
}

.right_nav_list_li {
  width: 100%;
  height: 68px;
  font-size: 36px;
  font-weight: 600;
  color: #3d485d;
  line-height: 68px;
  text-align: center;
  position: relative;
  cursor: pointer;
  /* letter-spacing: 36px; */
}
.right_nav_list_li:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  left: 50%;
  z-index: -2;
  transition: 0.3s;
  color: #ffffff;
  background: #3d485d;
}
.right_nav_list_li:hover {
  color: #ffffff;
}
.right_nav_list_li:hover:after {
  right: 0;
  left: 0;
}

.nav-leave {
  transform: translateX(0px);
  transition: all 0.3s ease;
}

.nav-enter {
  transform: translateX(-400px);
  transition: all 0.3s ease;
}
</style>
