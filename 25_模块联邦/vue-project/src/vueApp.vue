<template>
  <div style="border: 1px solid green">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello vue3333",
      style: "hello wordle",
    };
  },
  created() {
    // this.$http.get("http://47.108.151.32:9502/platform/v1/login/verifyCode").then((res) => {
    //   console.log("res", res);
    // });

    // this.$http.post("/lfm/platform/v1/login/verifyCode").then((res) => {
    //   console.log("res", res);

    //   this.$http.post("/lfm/platform/v1/login").then((res) => {
    //     console.log("res", res);
    //   });
    // });
  },
};
</script>

<style>
</style>