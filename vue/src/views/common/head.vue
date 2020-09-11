<template>
  <div class="home-body">
    <Navcon />
    <NavContent />
  </div>
</template>

<script>
import Navcon from "@/components/top_nav";
import NavContent from "@/components/content_top";

export default {
  components: {
    Navcon,
    NavContent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.home-body {
  width: 100%;
  height: 100vh;
  background: #3d485d;
  box-sizing: border-box;
}
</style>
