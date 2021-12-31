<template>
  <view class="container">
    <van-tabs :ellipsis="false">
      <van-tab title="新物品">
        <new-item-tab></new-item-tab>
      </van-tab>
      <van-tab title="已添加">
        <item-list-tab></item-list-tab>
      </van-tab>
      <van-tab title="提交">
        <submit-order-tab></submit-order-tab>
      </van-tab>
    </van-tabs>
  </view>
</template>

<script lang="ts" src="./addPage.ts"/>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
van-tabs{
  width: 100vw;
}
</style>
