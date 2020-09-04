<template>
  <transition name = "nav">
    <div :class = "[isShow?'right_nav nav-enter':'right_nav none nav-leave']">
      <div class = "right_nav_close" @click = "getClose">
        <img class = "right_nav_close_img" src = "" alt = "">
      </div>
      <div class = "jieshou">我接受到的父组件的消息是：{{isShow}}</div>
      <div class = "right_nav_list">
        <div class = "right_nav_list_li" v-for = "(item,index) in navList" v-bind:key="index">
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
        type: Boolean
      },
    },
    data() {
      return {
        navList: ['首页', '设计', '技术']
      }
    },
    methods: {
      getClose() {
        console.log('关闭');

        this.$emit('searchListZ', false);

      }
    }
  }

</script>

<style scoped>

  .right_nav {
    width: 400px;
    height: 1080px;
    background: #FFFFFF;
    border: 1px red solid;
    position: absolute;
    top: 0;
    right: -400px;
    z-index: 2;
  }

  .none {
    display: none;
  }

  .jieshou {
    color: #000;
  }

  .right_nav_close {
    width: 100%;
    height: 80px;
    border: 1px red solid;
  }

  .right_nav_close_img {
    width: 37px;
    height: 37px;
    border: 1px red solid;
  }

  .right_nav_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right_nav_list_li {
    width: 100%;
    height: 40px;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #3D485D;
  }

  .nav-leave {
    transform: translateX(0px);
    transition: all .3s ease;
  }

  .nav-enter {
    transform: translateX(-400px);
    transition: all .3s ease;
  }
</style>
