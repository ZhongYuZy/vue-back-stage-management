<template>
  <div class="box">
    <Herder></Herder>
    <Middle></Middle>
    <Tail></Tail>
    <Root></Root>
  </div>
</template>

<script>
import Herder from '../components/Home/herder/Herder'
import Middle from '../components/Home/middle/Middle'
import Tail from '../components/Home/tail/Tail'
import Root from '../components/Home/root/Root'
export default {
  
  name: "",
  props: {},
  data() {
    return {
    };
  },
  components: {
       Herder,
       Middle,
       Tail,
       Root,
  },
  methods: {
    
  },
  mounted() {
    
  },
  computed: {

  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  background-color: #f0f2f6;
}





</style>
