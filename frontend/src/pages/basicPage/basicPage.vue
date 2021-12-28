<template>
  <view class="container">
<!--    target selection-->
    <van-row class="targets">
      <van-cell title="对象(请选择2人)"
                class="select-target-cell"
                border
                size="large"
                is-link value="点击选择"
                :arrow-direction="targetPicker.targetArrowDirection" @click="toggleTargetPicker"></van-cell>
      <van-row class="targets-checkbox">
        <van-checkbox-group v-if="targetPicker.showPicker"
                            :value="targetPicker.result"
                            @change="onTargetPickerChange"
                            direction="horizontal"
                            :max="2">
          <van-checkbox v-for="target in targetList"
                        :key="target"
                        checked-color="#47cd5d"
                        :name="target">
            {{ target }}
          </van-checkbox>
        </van-checkbox-group>
      </van-row>
    </van-row>
<!--test-->
<!--    <button @tap="test">Click</button>-->
<!--    fixed fees-->
    <van-row class="fees">
      <van-cell-group>
        <van-field checked-color="#47cd5d" size="large" input-align="center" label="电费" :value="getFees.electricityFee" type="number" :border="true" @blur="setElectricityFee" :error="fees.showElectricityError"/>
        <van-field size="large" input-align="center" label="Amazon" :value="getFees.amazonFee" type="number" :border="true" @blur="setAmazonFee" :error="fees.showAmazonError"/>
        <van-field size="large" input-align="center" label="网费" :value="getFees.internetFee" type="number" :border="true" @blur="setInternetFee" :error="fees.showInternetError"/>
        <van-field size="large" input-align="center" label="其他" :value="getFees.otherFee" type="number" :border="true" @blur="setOtherFee" :error="fees.showOtherError"/>
      </van-cell-group>
    </van-row>
  </view>
</template>

<script lang="ts" src="./basicPage.ts"/>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.targets{
  width: 100vw;
}
.targets-checkbox{
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 1vh 0 1vh 0
}
.fees{
  width: 100vw;
}
</style>
