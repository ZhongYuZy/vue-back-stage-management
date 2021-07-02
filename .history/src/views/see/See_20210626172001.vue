<template>
  <div>
    <button>返回</button>
    <mavon-editor
      class="md"
      v-model="id1.text"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      id1:'',

    };
  },
  components: {},
  methods: {
    
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>