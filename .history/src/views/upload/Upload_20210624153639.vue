<template>
  <div id="app">
    <div class="box1">
      <div class="drop">支持拖拽</div>
      <div class="Element">Element Ul自带上传组件</div>
      <el-upload class="upload-demo" drag action="/api/Upload" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <div class="Tailoring">支持裁剪</div>
      <div class="vue">vue-image-crop-upload</div>
      <button class="btn" @click="toggleShow">上传图片</button>
    </div>
  </div>
</template>

<script>
import "babel-polyfill";
import myUpload from "vue-image-crop-upload/upload-2.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      avatar: "", //用于存储剪切完图片的base64Data和显示回调图片
      show: false, //剪切框显示和隐藏的flag
      size: 2.1,
    };
  },
  components: {
     "my-upload": myUpload
  },
  methods: {
    toggleShow() {
        this.show = !this.show;
      },
      //剪切成功后的回调函数
      cropSuccess(imgDataUrl) {
        //  imgDataUrl其实就是图片的base64data码
        this.avatar = imgDataUrl;
        console.log(imgDataUrl)//这里打印出来的是base64格式的资源
      }
    }
————————————————
版权声明：本文为CSDN博主「对啊我是太阳啊」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_42034123/article/details/102784862
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#app {
  padding: 20px;
  width: 100%;
  height: 920px;
  background-color: #eceef1;
}
.box1 {
  padding: 5px 5px 5px 20px;
  width: 90%;
  background-color: #fff;
}
.drop {
  font-size: 30px;
}
.Element {
  width: 1300px;
  display: flex;
  line-height: 60px;
  padding: 0 20px;
  margin: 15px 0;
  height: 60px;
  background-color: #eeeeee;
  font-size: 20px;
}
.Tailoring {
  margin: 20px 5px;
  font-size: 30px;
}
.vue {
  width: 1300px;
  display: flex;
  line-height: 60px;
  margin: 15px 0;
  padding: 0 20px;
  height: 60px;
  background-color: #eeeeee;
  font-size: 20px;
}
.btn {
  width: 100px;
  height: 30px;
  margin: 5px 0 20px 0;
  background-color: skyblue;
  color: #fff;
  border: 0px;
}
</style>