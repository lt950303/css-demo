<template>
  <div class="home">
    <img class="home__logo" alt="Vue logo" src="../assets/logo.png">
    <div>
      <button class="home__like">点赞</button>
      <button class="home__dislike home__dislike--disabled">反对</button>
    </div>
    <div class="home__content home__content--style11">
      <div class="home__card">
        <!-- good -->
        <div  class="home__card-item"></div>
        <!-- bad
            元素始终是块的一部分，而不是另一个元素。这意味着元素名称不能定义层次结构，例如block__elem1__elem2.
        -->
        <div  class="home__card__item"></div>
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="less" scoped>
.button-color(@color; @background; @border) {
  color: @color;
  border-color: @border; // a inside Button which only work in Chrome
  & when not(@background = null) {
    background: @background;
  }
}

.home__like, .home__dislike{
  border: 1px solid @btn-group-border;
  background-color: @body-background;

  .operation-unit();

  &--disabled {
    &,
    &:hover,
    &:focus,
    &:active {
      .button-color(@btn-disable-color; @btn-disable-bg; @btn-disable-border);

      text-shadow: none;
      box-shadow: none;
    }
  }
}
</style>
