<template>
  <div>
   
    <no-ssr>    
       <button>返回</button>                         
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