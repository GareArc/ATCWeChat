<template>
  <view class="container">
<!--    Three people-->
    <van-row>
      <van-cell>
        <template #title>
          <view class="title">三人部分</view>
        </template>
        <template #right-icon>
          <van-tag type="success" size="large">{{ getThreePeopleList.length }}</van-tag>
        </template>
      </van-cell>
    </van-row>
    <van-row>
      <three-people-item-display v-for="(item, index) in getThreePeopleList"
                                 :key="index" :item="item" :itemIndex="index"/>
    </van-row>
    <!--    Target 1-->
    <van-row>
      <van-cell>
        <template #title>
          <view class="title">{{ getTarget1Info }}</view>
        </template>
        <template #right-icon>
          <van-tag type="success" size="large">{{ getTarget1List.length }}</van-tag>
        </template>
      </van-cell>
    </van-row>
    <van-row>
      <target-item-display v-for="(item,index) in getTarget1List"
                           :key="index" :item="item" :itemIndex="index" :target="1"/>
    </van-row>
    <!--    Target 2-->
    <van-row>
      <van-cell>
        <template #title>
          <view class="title">{{ getTarget2Info }}</view>
        </template>
        <template #right-icon>
          <van-tag type="success" size="large">{{ getTarget2List.length }}</van-tag>
        </template>
      </van-cell>
    </van-row>
      <van-row>
        <target-item-display v-for="(item,index) in getTarget2List"
                             :key="index" :item="item" :itemIndex="index" :target="2"/>
      </van-row>
  </view>
</template>

<script lang="ts" src="./itemListTab.ts"/>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3vh 0 0 10px;
}
.title{
  font-size: large;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: grey;
}
van-row{
  width: 100%;
}
</style>
