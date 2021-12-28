<template>
    <view class="container">
      <van-row class="title-en">
        <view>Welcome to ATC</view>
      </van-row>
      <van-row class="title-zh">
        <view>三人日常计算器</view>
      </van-row>
      <van-row>
        <view class="desc">
          <view class="desc-title">简介</view>
          <view>1. 基础设定中可以设置账单的两个对象以及月度固定花销。</view>
          <view>2. 添加页面里包含3个Tabs，最后一个为提交订单。</view>
        </view>
      </van-row>
    </view>
</template>

<script lang="ts" src="./index.ts"/>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
.title-en{
  font-size: xx-large;
  color: #47cd5d;
  margin: 0 0 20pt 0;
}
.title-zh{
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 25pt;
}
.desc{
  margin-left: 50pt;
  margin-right: 50pt;
}
.desc-title{
  font-weight: bold;
  font-size: medium;
  text-decoration: underline;
  margin-bottom: 10pt;
}
</style>
