<template>
  <div>
   <button>返回</button>
    <no-ssr>                       
 	<mavon-editor                                    
 		v-model="bamFrom.bafMarkdown"                                     
 		:subfield="false"                                    
 		:boxShadow="false"                                    
 		defaultOpen="preview"                                    
 		:toolbarsFlag="false"                                   
 	 />                            
 </no-ssr>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>