<template>
  <view class="container">
    <!--    loading screen-->
    <van-overlay :show="isLoading" >
      <view class="loading-wrapper">
        <van-loading color="#47cd5d"/>
      </view>
    </van-overlay>
    <van-button type="primary" custom-style="width: 50vw" @tap.native="uploadOrder">提交</van-button>
  </view>
</template>

<script lang="ts" src="./submitOrderTab.ts"/>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8vh 5vw 0 5vw;
}
.loading-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
