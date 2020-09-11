<template>
  <div class="content-top">
    <div class="content-top-title">
      <img class="content-top-title-img" src="../assets/tec_text.png" alt="" />
    </div>
    <p class="content-top-text1">成名的艺术家反为盛名所拘束</p>
    <p class="content-top-text1">所以他们最早的作品往往是最好的。</p>
    <p class="content-top-text2">——贝多芬</p>
    <div class="content-top-text3" @click="getScrollTop">
      <p>请往下滑动它</p>
      <img src="../assets/line_down.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "content_top",
  title: {
    type: String,
  },
  data() {
    return { scroll: "" };
  },

  methods: {
    getScrollTop() {
      document.documentElement.scrollTop = window.innerHeight;
    },
  },
};
</script>

<style>
.content-top {
  width: 100%;
  height: 78.15vh;
  display: flex;
  flex-direction: column;
  padding-left: 160px;
  box-sizing: border-box;
  color: #fff;
}

.content-top-title {
  width: 1562px;
  height: 149px;
  display: flex;
  margin-bottom: 7.69vh; /* 83px */
  margin-top: 5.74vh; /* 62px */
}
.content-top-title-img {
  width: 1562px;
  height: 149px;
  background-size: 100%;
}
.content-top-text1 {
  width: 100%;
  height: 3.7vh; /* 40px */
  font-size: 40px;
  letter-spacing: 3px;
  line-height: 3.7vh;
  font-family: HiraginoSansGB-W6, HiraginoSansGB;
  margin-bottom: 1.85vh;
}
.content-top-text2 {
  width: 100%;
  height: 2.78vh;
  font-size: 30px;
  font-family: HiraginoSansGB-W3, HiraginoSansGB;
  color: #ffffff;
  line-height: 2.78vh;
  margin-top: 3.7vh;
  margin-bottom: 11.3vh;
}

.content-top-text3 {
  width: 100%;
  height: 4.81vh;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.content-top-text3 p {
  font-size: 16px;
  letter-spacing: 8px;
  font-weight: 400;
  color: #f15b67;
  font-family: PingFangSC-Regular, PingFang SC;
  margin-right: 20px;
}
.content-top-text3 img {
  width: 10px;
  height: 52px;
  background-size: 100%;
  cursor: pointer;
}
</style>
