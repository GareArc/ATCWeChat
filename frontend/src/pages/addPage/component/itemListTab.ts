import {defineComponent} from "vue";
import {getModule} from "vuex-module-decorators";
import OrderStore from "@/store/modules/OrderStore";
import {Item, Relation, ShareType} from "@/models/Item";
//@ts-ignore
import {vanSwipeCell} from "../../../wxcomponents/swipe-cell/index";
//@ts-ignore
import {vanCell} from "../../../wxcomponents/cell/index";
//@ts-ignore
import {vanTag} from "../../../wxcomponents/tag/index";
import threePeopleItemDisplay from "@/components/threePeopleItemDisplay.vue";
import targetItemDisplay from "@/components/targetItemDisplay.vue";

export default defineComponent({
    components: {
        vanSwipeCell,
        vanCell,
        vanTag,
        // @ts-ignore
        threePeopleItemDisplay,
        // @ts-ignore
        targetItemDisplay,
    },
    data() {
        return {
            orderStore: getModule(OrderStore)
        }
    },
    methods: {

    },
    computed: {
        getTarget1Info(): string{
            return (this as any).orderStore.currentOrder.Target1Info;
        },
        getTarget2Info(): string{
            return (this as any).orderStore.currentOrder.Target2Info;
        },
        getThreePeopleList(): Item[]{
            return (this as any).orderStore.currentOrder.ThreePeople;
        },
        getTarget1List(): Item[]{
            return (this as any).orderStore.currentOrder.Target1;
        },
        getTarget2List(): Item[]{
            return (this as any).orderStore.currentOrder.Target2;
        }
    }
})
