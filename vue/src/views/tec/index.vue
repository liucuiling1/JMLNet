<template>
  <div>
    <HeadPage />
    <div class="tec-data">
      <div class="tec-essay">
        <p>
          文章
          <span class="tec-number">ARTICLE</span>
        </p>
        <p class="tec-number">28 篇</p>
      </div>
      <div class="tec-list-border">
        <div class="tec-list" v-for="(item, index) in list" v-bind:key="index">
          <p>{{ item.title }}</p>
          <p>{{ item.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadPage from "../common/head";

export default {
  components: {
    HeadPage,
  },
  data() {
    return {
      list: [
        {
          title: "在 CRA 中使用 webp 图片提升加载性能",
          time: "2020.8.27",
        },
        {
          title: "bind call appiy 用法与区别",
          time: "2020.8.27",
        },
        {
          title: "echarts堆叠图 tooltip中各项指标如何实现‘倒序展示’",
          time: "2020.8.27",
        },
        {
          title: "echarts堆叠图 tooltip中各项指标如何实现‘倒序展示’",
          time: "2020.8.27",
        },
        {
          title: "echarts堆叠图 tooltip中各项指标如何实现‘倒序展示’",
          time: "2020.8.27",
        },
        {
          title: "echarts堆叠图 tooltip中各项指标如何实现‘倒序展示’",
          time: "2020.8.27",
        },
        {
          title: "echarts堆叠图 tooltip中各项指标如何实现‘倒序展示’",
          time: "2020.8.27",
        },
        {
          title: "echarts堆叠图 tooltip中各项指标如何实现‘倒序展示’",
          time: "2020.8.27",
        },
      ],
    };
  },
};
</script>
<style>
.tec-data {
  width: 100%;
  /* height: 100%; */
  min-height: 100vh;
  background: #3d485d;
  padding: 0 150px 141px 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.tec-essay {
  width: 100%;
  height: 337px;
  font-size: 78px;
  font-weight: 600;
  color: #ffffff;
  /* line-height: 88px; */
  display: flex;
  justify-content: space-between;
  padding-top: 150px;
  padding-left: 60px;
  box-sizing: border-box;
}

.tec-number {
  font-size: 24px;
  font-family: HiraginoSansGB-W3, HiraginoSansGB;
  color: #ffffff;
  letter-spacing: 3px;
  font-weight: normal;
  opacity: 0.5;
  padding-top: 48px;
  box-sizing: border-box;
}
.tec-list-border {
  border-top: 1px #fff solid;
  border-bottom: 1px #fff solid;
  /* opacity: 0.5; */
}

.tec-list {
  width: 100%;
  height: 178px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.tec-list p:nth-child(1) {
  color: #ffffff;
  font-size: 38px;
  font-weight: 600;
  opacity: 1;
}
.tec-list p:nth-child(2) {
  font-size: 22px;
  font-family: HiraginoSansGB-W3, HiraginoSansGB;
  color: #ffffff;
  letter-spacing: 2px;
  opacity: 0.5;
}
.tec-list:hover p:nth-child(1) {
  color: #f15b67;
}
</style>
