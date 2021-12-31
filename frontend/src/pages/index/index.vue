<template>
    <view class="container">
      <van-row class="title-en" style="width: 100%">
        <view>Welcome to ATC</view>
      </van-row>
      <van-row class="title-zh" style="width: 100%">
        <view>三人日常计算器</view>
      </van-row>
      <van-row style="width: 100%">
        <view class="desc-container">
          <view class="desc-title">简介</view>
          <view class="desc-content-wrapper">
            <text class="desc-content">
              1.基础设定中可以设置账单的两个对象以及月度固定花销。\n
              2.添加页面里包含3个Tabs:\n
            </text>
            <text class="desc-content desc-indent">
              ①新物品: 添加一种新物品，可定义价格、数量、对象以及是否收税。\n
              ②已添加: 查看已经添加的物品，左滑可以删除。\n
              ③提交: 提交整个订单, 提交完成以后所有记录会被清空，请至历史页面查看已提交的订单。\n
            </text>
            <text class="desc-content">
              3.收税物品默认税值为13%, 若有变化请联系管理员Gare_TH.
            </text>
          </view>
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
.desc-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.desc-content-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-wrap: normal;
  width: 60%;
}
.desc-title{
  font-weight: bold;
  font-size: medium;
  text-decoration: underline;
  margin-bottom: 10pt;
}
.desc-content{
  text-align: start;
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
}
.desc-indent{
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
