<script lang="ts">
    import {defineComponent} from 'vue';
    export default defineComponent({
      onLaunch: function(){
        wx.cloud.init();
      }
    })
</script>
<style>
    /*每个页面公共css */
    /* vant - weapp */
    @import './wxcomponents/common/index.wxss';
</style>
