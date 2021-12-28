<template>
  <view class="item-container">
    <van-cell-group>
      <van-swipe-cell :right-width="65">
        <template>
          <van-row class="row">
            <!--          price, quantity and tax-->
            <van-col span="6">
              <view class="flex-container">
                <image :src="require('@/static/icon/price.png')" class="img" mode="heightFix"/>
                <view class="detail">{{`$${getItem.price}`}}</view>
              </view>
            </van-col>
            <van-col span="5">
              <view class="flex-container">
                <image :src="require('@/static/icon/quantity.png')" class="img"/>
                <text class="detail">{{getItem.quantity}}</text>
              </view>
            </van-col>
            <van-col span="4">
              <view class="flex-container">
                <image v-if="getItem.isTaxed" :src="require('@/static/icon/tax-yes.png')" class="img"/>
                <image v-else :src="require('@/static/icon/tax-no.png')" class="img"/>
                <text v-if="getItem.isTaxed" class="checkmark-yes">✔</text>
                <text v-else class="checkmark-no">×</text>
              </view>
            </van-col>
          </van-row>
        </template>
        <template #right>
          <view class="delete-button" @tap.native="deleteItem">删除</view>
        </template>
      </van-swipe-cell>
    </van-cell-group>
  </view>
</template>

<script lang="ts" src="./threePeopleItemDisplay.ts"/>

<style scoped>
.item-container{
  margin-top: 10px;
  margin-bottom: 10px;
}
.img{
  width: 40px;
  height: 40px;
}
.detail{
  font-size: large;
  overflow-x: hidden;
  white-space: nowrap;
  width: 50%;
}
.flex-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: inherit;
}
.delete-button{
  background-color: #d02d40;
  width: 64px;
  height: inherit;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkmark-yes{
  color: #47cd5d;
}
.checkmark-no{
  color: #d02d40;
}
</style>
