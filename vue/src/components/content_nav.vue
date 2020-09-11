<template>
  <div class="content-body">
    <div class="content-welcome">
      <img
        class="content-welcome-img"
        src="../assets/welcome_text.png"
        alt=""
      />
    </div>
    <div class="content-text1">
      <p>个人简介</p>
      <img src="../assets/arrow.png" alt="" />
    </div>
    <div class="content-line">
      <div class="content-bg"></div>
    </div>
    <p class="content-text2">愿你成为自己的太阳</p>
    <p class="content-text2">活成自己曾经渴望的模样。</p>
    <p class="content-text3">STRIVE | Since 2019</p>
    <div class="content-absolute">首页</div>
    <div class="content-fixed-right">
      <span>CN</span>
      <span>｜</span>
      <span class="content-rotate1">EN</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "content_nav",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.content-body {
  width: 100%;
  height: 78.15vh;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  box-sizing: border-box;
  color: #fff;
}

.content-welcome {
  width: 1012px;
  height: 133px;
  display: flex;
  margin-bottom: 7.77vh; /* 84px */
  margin-top: 6.85vh; /* 74px */
  z-index: 1;
}
.content-welcome-img {
  width: 100%;
  height: 100%;
  background-size: 100%;
}
.content-text1 {
  width: 100%;
  height: 1.85vh;
  font-size: 20px;
  letter-spacing: 3px;
  line-height: 1.85vh;
  font-family: HiraginoSansGB-W6, HiraginoSansGB;
  display: flex;
  align-items: center;
}
.content-text1 p {
  margin-right: 181px;
}
.content-text1 img {
  width: 23px;
  height: 9px;
  background-size: cover;
}
.content-text2 {
  width: 100%;
  height: 2.41vh;
  font-size: 26px;
  color: #ffffff;
  letter-spacing: 3px;
  line-height: 2.41vh;
  margin-bottom: 1.39vh; /* 15px */
  font-family: HiraginoSansGB-W6, HiraginoSansGB;
}
.content-text3 {
  position: fixed;
  left: 60px;
  bottom: 50px;
  width: 100%;
  height: 16px;
  font-size: 16px;
  line-height: 16px;
}
.content-absolute {
  width: 26px;
  position: absolute;
  top: 150px;
  bottom: 150px;
  right: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 600;
  line-height: 56px;
}
.content-fixed-right {
  width: 16px;
  height: 93px;
  position: fixed;
  right: 59px;
  bottom: 49px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
}
.content-fixed-right span {
  font-size: 16px;
  font-weight: 100;
  line-height: 16px;
  transform: rotate(90deg);
}
.content-rotate1 {
  text-decoration: line-through;
}
.content-line {
  width: 560px;
  height: 2px;
  background: #f15b67;
  margin-top: 2.96vh;
  margin-bottom: 5.56vh;
  position: relative;
}
.content-bg {
  position: absolute;
  top: -349px;
  right: -1035px;
  width: 1038px;
  height: 560px;
  background: url("../assets/bg.png") no-repeat;
  background-size: cover;
  z-index: 0;
}
</style>
