<template>
  <view v-if="order !== null" class="container">
<!--    targets total-->
    <van-row style="width: 100%">
      <van-cell-group title="总计">
        <van-col span="12">
          <view class="target-total">
            <view>{{`${order.Target1Info}: `}}</view>
            <view>{{` $${order.Target1Total}`}}</view>
          </view>
        </van-col>
        <van-col span="12">
          <view class="target-total">
            <view>{{`${order.Target2Info}: `}}</view>
            <view>{{` $${order.Target2Total}`}}</view>
          </view>
        </van-col>
      </van-cell-group>
    </van-row>
<!--    base fees-->
    <van-row style="width: 100%">
      <van-cell-group title="基础部分">
        <van-cell title="电费" :value="order.Fees.electricityFee"/>
        <van-cell title="网费" :value="order.Fees.internetFee"/>
        <van-cell title="Amazon费" :value="order.Fees.amazonFee"/>
        <van-cell title="其他" :value="order.Fees.otherFee"/>
      </van-cell-group>
    </van-row>
<!--    three people list-->
    <van_row style="width: 100%">
      <van-cell-group title="三人部分">
        <view v-if="order.ThreePeople.length === 0">暂无</view>
        <van-cell v-else v-for="item in order.ThreePeople"
                  :key="item"
                  title="物品"
                  :label="getItemDesc(item)"
                  :value="`${item.quantity} * $${item.price}`" />
      </van-cell-group>
    </van_row>
<!--    target1 list-->
    <van-row style="width: 100%">
      <van-cell-group :title="order.Target1Info">
        <view class="empty-list-display" v-if="order.Target1.length === 0">暂无</view>
        <van-cell v-else v-for="item in order.Target1"
                  :key="item"
                  title="物品"
                  :label="getItemDesc(item)"
                  :value="`${item.quantity} * $${item.price}`" />
      </van-cell-group>
    </van-row>
<!--    target2 list-->
    <van-row style="width: 100%">
      <van-cell-group :title="order.Target2Info">
        <view class="empty-list-display" v-if="order.Target2.length === 0">暂无</view>
        <van-cell v-else v-for="item in order.Target2"
                  :key="item"
                  title="物品"
                  :label="getItemDesc(item)"
                  :value="`${item.quantity} * $${item.price}`" />
      </van-cell-group>
    </van-row>
    <view class="end">----- END-----</view>
  </view>
</template>

<script lang="ts" src="./OrderPopup.ts"/>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.empty-list-display{
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
}
.target-total{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  white-space: nowrap;
  margin: 1vh 0 1vh 0;
  width: 100%;
}
.end{
  margin-top: 2vh;
}
</style>
