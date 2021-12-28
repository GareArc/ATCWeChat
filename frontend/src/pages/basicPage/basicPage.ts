import {computed, defineComponent} from "vue";
import {getModule} from "vuex-module-decorators";
import OrderStore from "@/store/modules/OrderStore";

export default defineComponent({
    setup(){
        const orderStore = getModule(OrderStore);
        const targetList = computed(() => {
            return orderStore.targets;
        });

        return {
            targetList,
        }
    },
    data() {
        return {
            orderStore: getModule(OrderStore) as OrderStore,
            targetPicker: {
                targetArrowDirection: "down",
                showPicker: false,
                result: ["Gareth", "Charlie"]
            },
            fees: {
                showElectricityError: false,
                showAmazonError: false,
                showInternetError: false,
                showOtherError: false,
            }
        }
    },
    methods: {
        toggleTargetPicker(): void{
            this.targetPicker.showPicker = !this.targetPicker.showPicker
        },
        onTargetPickerChange(e: any): void{
            this.targetPicker.result = e.detail;
            if(e.detail.length === 2){
                this.orderStore.currentOrder.Target1Info = e.detail[0];
                this.orderStore.currentOrder.Target2Info = e.detail[1];
            }
        },
        setElectricityFee(e: any): void{
            if(isNaN(Number.parseInt(e.detail.value))){
                this.fees.showElectricityError = true;
                return;
            }
            this.fees.showElectricityError = false;
            this.orderStore.currentOrder.Fees.electricityFee = Number.parseInt(e.detail.value);
        },
        setAmazonFee(e: any): void{
            if(isNaN(Number.parseInt(e.detail.value))){
                this.fees.showAmazonError = true;
                return;
            }
            this.fees.showAmazonError = false;
            this.orderStore.currentOrder.Fees.amazonFee = Number.parseInt(e.detail.value);
        },
        setInternetFee(e: any): void{
            if(isNaN(Number.parseInt(e.detail.value))){
                this.fees.showInternetError = true;
                return;
            }
            this.fees.showInternetError = false;
            this.orderStore.currentOrder.Fees.internetFee = Number.parseInt(e.detail.value);
        },
        setOtherFee(e: any): void{
            if(isNaN(Number.parseInt(e.detail.value))){
                this.fees.showOtherError = true;
                return;
            }
            this.fees.showOtherError = false;
            this.orderStore.currentOrder.Fees.otherFee = Number.parseInt(e.detail.value);
        },
        test(){
            console.log(JSON.stringify(this.orderStore.currentOrder));
        }
    },
    computed: {
        getTarget1(): string{
            // console.log(this.orderStore.currentOrder.Target1);
            return this.orderStore.currentOrder.Target1Info;
        },
        getFees(): { electricityFee: number, amazonFee: number, internetFee: number, otherFee: number} {
            // console.log(this.orderStore.currentOrder.Fees);
            return this.orderStore.currentOrder.Fees;
        }
    }
})
