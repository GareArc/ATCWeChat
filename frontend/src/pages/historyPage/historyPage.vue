<template>
  <view class="container">
<!--    loading screen-->
    <van-overlay :show="isLoading" >
      <view class="loading-wrapper">
        <van-loading color="#47cd5d"/>
      </view>
    </van-overlay>
<!--    popup-->
    <van-popup :show="showPopup"
               :closeable="true"
               :close-on-click-overlay="false"
               custom-style="height: 100%; width: 100%"
               :safe-area-inset-top="true"
               @close.native="onPopupClose">
      <order-popup v-if="selectedOrder.order"
                   :order="selectedOrder.order"
                   :uuid="selectedOrder.uuid" @close-order-popup="onDeleteClosePopup"/>
    </van-popup>
<!--    title-->
<!--    <van-row style="width: 100%">-->
<!--      <view class="title">历史账单</view>-->
<!--    </van-row>-->
<!--    orderMeta cells-->
    <van-row style="width: 100%">
      <view class="order-meta-wrapper">
        <van-cell-group>
          <van-cell v-for="meta in orderMetaList"
                    :key="meta"
                    :title="meta.time"
                    :label="meta.uuid"
                    is-link value="查看"
                    :clickable="true"
                    @tap.native="loadSelectedOrder(meta)"/>
        </van-cell-group>
      </view>
    </van-row>
  </view>
</template>

<script lang="ts" src="./historyPage.ts"/>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loading-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
