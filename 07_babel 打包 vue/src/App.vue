<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello vue",
    };
  },
};
</script>

<style lang="less">
h1{
    color: red;
}
</style>