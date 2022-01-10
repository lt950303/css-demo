<template>
  <div class="hello">
    <h1 class="hello__title">{{ msg }}</h1>
    <p class="hello__desc">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a class="hello__link"
         href="https://cli.vuejs.org"
         target="_blank"
         rel="noopener">vue-cli documentation</a>.
      <a class="hello__link hello__link--disabled"
         disabled
         href="https://cli.vuejs.org"
         target="_blank"
         rel="noopener">vue-cli documentation2222</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.hello__link {
  .operation-unit();
}
.hello__link--disabled {
  color: @disabled-color;
}
</style>
