<template>
  <view class="container">
<!--    relation-->
    <view class="content-container">
      <van-row class="share-type-wrapper" gutter="15">
        <van-col>
          <view>选择类型:</view>
        </van-col>
        <van-col>
          <van-radio-group direction="horizontal"
                           :value="itemInfo.relation"
                           @change.native="onRelationChange">
            <van-radio checked-color="#47cd5d"
                       name="INDIVIDUAL">个人</van-radio>
            <van-radio checked-color="#47cd5d"
                       name="SHARED">双人</van-radio>
            <van-radio checked-color="#47cd5d"
                       name="ALL">三人</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
      <!--    shared option-->
      <van-row class="shared-option-wrapper" gutter="20" v-if="showSharedRadio">
        <van-col>
          <view>具体是指:</view>
        </van-col>
        <van-col>
          <van-radio-group direction="vertical"
                           :value="itemInfo.shareType"
                           @change.native="onShareTypeChange">
            <van-cell-group>
              <van-cell>
                <van-radio checked-color="#47cd5d"
                           name="WITHTARGET1">{{`我和${target1Info}`}}</van-radio>
              </van-cell>
              <van-cell>
                <van-radio checked-color="#47cd5d"
                           name="WITHTARGET2">{{`我和${target2Info}`}}</van-radio>
              </van-cell>
              <van-cell>
                <van-radio checked-color="#47cd5d"
                           name="TARGETS">{{`${target1Info}和${target2Info}`}}</van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </van-col>
      </van-row>
      <!--individual option-->
      <van-row class="individual-option-wrapper" gutter="20" v-if="showIndividualRadio">
        <van-col>
          <view>选择对象:</view>
        </van-col>
        <van-col>
          <van-radio-group direction="horizontal"
                           :value="itemInfo.target"
                           @change.native="onTargetChange">
            <van-radio checked-color="#47cd5d"
                       :name="1">{{ target1Info }}</van-radio>
            <van-radio checked-color="#47cd5d"
                       :name="2">{{ target2Info }}</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
      <!--    price-->
      <van-row class="price-input-title">
        <view>输入价格:</view>
      </van-row>
      <van-row class="price-input-content">
        <van-stepper min="0.01" step="0.01" decimal-length="2"
                     input-width="150"
                     button-size="40"
                     @change.native="onPriceChange"/>
      </van-row>
      <!--    quantity-->
      <van-row class="quantity-input-title">
        <view>输入数量:</view>
      </van-row>
      <van-row class="quantity-input-content">
        <van-stepper min="1" step="1"
                     input-width="150"
                     button-size="40"
                     @change.native="onQuantityChange"/>
      </van-row>
      <!--    taxed-->
      <van-row class="tax-switch-wrapper" gutter="50">
        <van-col>
          <view class="tax-switch-left-title">是否收税:</view>
        </van-col>
        <van-col>
          <van-switch :checked="itemInfo.isTaxed"
                      active-color="#47cd5d"
                      @change.native="toggleIsTaxed"/>
        </van-col>
      </van-row>
      <!--  submit-->
      <van-row class="submit-wrapper">
        <van-button type="primary"
                    custom-style="width:50vw"
                    @click="submit">
          添加
        </van-button>
      </van-row>
    </view>

<!--    test-->
<!--    <button @tap="test">CLick</button>-->
  </view>
</template>

<script lang="ts" src="./newItemTab.ts"/>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8vh 5vw 0 5vw;
}
.share-type-wrapper{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.shared-option-wrapper{
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.individual-option-wrapper{
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.price-input-title{
  margin-top: 5vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.price-input-content{
  margin-top: 2vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quantity-input-title{
  margin-top: 5vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.quantity-input-content{
  margin-top: 2vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tax-switch-wrapper{
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.tax-switch-left-title{
  margin-top: 5px;
}
.submit-wrapper{
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
van-row{
  width: 100%;
}
</style>
