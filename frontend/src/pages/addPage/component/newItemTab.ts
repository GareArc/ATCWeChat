import {defineComponent} from "vue";
import {getModule} from "vuex-module-decorators";
import OrderStore from "../../../store/modules/OrderStore";
import {Item, Relation, ShareType} from "../../../models/Item";
//@ts-ignore
import {vanRadio} from "../../../wxcomponents/radio/index";
//@ts-ignore
import {vanRadioGroup} from "../../../wxcomponents/radio-group/index";
// @ts-ignore
import {vanCellGroup} from "../../../wxcomponents/cell-group/index";
// @ts-ignore
import {vanCell} from "../../../wxcomponents/cell/index";
// @ts-ignore
import {vanStepper} from "../../../wxcomponents/stepper/index";
// @ts-ignore
import {vanSwitch} from "../../../wxcomponents/switch/index";
// @ts-ignore
import {vanButton} from "../../../wxcomponents/button/index";

export default defineComponent({
    components: {
        vanRadio,
        vanButton,
        vanSwitch,
        vanStepper,
        vanRadioGroup,
        vanCell,
        vanCellGroup
    },
    data() {
        return {
            orderStore: getModule(OrderStore),
            itemInfo: {
                price: 0.01,
                shareType: "WITHTARGET2",
                relation: "ALL",
                isTaxed: false,
                quantity: 1,
                target: 1
            },
            isSubmitting: false
        }
    },
    methods: {
        onRelationChange(e: any): void{
            this.itemInfo.relation = e.detail;
        },
        onShareTypeChange(e: any): void{
            this.itemInfo.shareType = e.detail;
        },
        onTargetChange(e: any): void{
            this.itemInfo.target = e.detail;
        },
        onPriceChange(e: any): void{
            this.itemInfo.price = Number(e.detail);
        },
        onQuantityChange(e: any): void{
            this.itemInfo.quantity = Number(e.detail);
        },
        toggleIsTaxed(e: any): void{
            this.itemInfo.isTaxed = e.detail;
        },
        async submit(): Promise<void>{
            if(this.isSubmitting) return ;
            this.isSubmitting = true;
            const item: Item = {
                price: this.itemInfo.price,
                shareType: ShareType[this.itemInfo.shareType as keyof typeof ShareType],
                relation: Relation[this.itemInfo.relation as keyof typeof Relation],
                isTaxed: this.itemInfo.isTaxed,
                quantity: this.itemInfo.quantity
            };
            if(item.relation === Relation.ALL){
                this.orderStore.currentOrder.addToThreePeople(item);
            }
            else if(item.relation === Relation.SHARED){
                if(item.shareType === ShareType.TARGETS){
                    this.orderStore.currentOrder.addToTarget1(item);
                    this.orderStore.currentOrder.addToTarget2(item);
                }
                else if(item.shareType === ShareType.WITHTARGET2){
                    this.orderStore.currentOrder.addToTarget2(item);
                }
                else this.orderStore.currentOrder.addToTarget1(item);
            }
            else if(item.relation === Relation.INDIVIDUAL){
                if(this.itemInfo.target === 1){
                    this.orderStore.currentOrder.addToTarget1(item);
                }
                else this.orderStore.currentOrder.addToTarget2(item);
            }
            await wx.showToast({
                title: "添加成功",
                icon: "success",
                duration: 1000
            });
            this.isSubmitting = false;
        }
    },
    computed: {
        showSharedRadio(): boolean{
            return this.itemInfo.relation === Relation.SHARED.toString();
        },
        showIndividualRadio(): boolean{
            return this.itemInfo.relation === Relation.INDIVIDUAL.toString();
        },
        target1Info(): string{
            return this.orderStore.currentOrder.Target1Info;
        },
        target2Info(): string{
            return this.orderStore.currentOrder.Target2Info;
        },
    }
})
