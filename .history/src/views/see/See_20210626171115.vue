<template>
  <div>
     <no-ssr>                                
 	<mavon-editor                                    
 		v-model="bamFrom.bafMarkdown"                                     
 		:subfield="false"                                    
 		:boxShadow="false"                                    
 		defaultOpen="preview"                                    
 		:toolbarsFlag="false"                                   
 	 />                            
 </no-ssr>
————————————————
版权声明：本文为CSDN博主「小道仙97」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/Tomwildboar/article/details/100068552
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