import {defineComponent, PropType} from "vue";
import {Item, Relation, ShareType} from "@/models/Item";
import {getModule} from "vuex-module-decorators";
import OrderStore from "@/store/modules/OrderStore";

//@ts-ignore
import {vanCell} from "@/wxcomponents/cell/index";
//@ts-ignore
import {vanCellGroup} from "@/wxcomponents/cell-group/index";
//@ts-ignore
import {vanSwipeCell} from "@/wxcomponents/swipe-cell/index";

export default defineComponent({
    components: {
        vanCell,
        vanCellGroup,
        vanSwipeCell
    },
    props: {
        item: {
            required: true,
            type: Object as PropType<Item>
        },
        target: {
            required: true,
            type: Number
        }
    },
    data() {
        return {
            orderStore: getModule(OrderStore)
        }
    },
    methods: {
        deleteItem(): void{
            if( this.target === 1) this.orderStore.currentOrder.delFromTarget1(this.item);
            else this.orderStore.currentOrder.delFromTarget2(this.item);
        }
    },
    computed: {
        getItem(): Item{
            return this.item;
        },
        relationDesc(): string{
            if(this.item.relation === Relation.SHARED){
                if(this.item.shareType === ShareType.WITHTARGET1)
                    return `我和${this.orderStore.currentOrder.Target1Info}`
                else if(this.item.shareType === ShareType.WITHTARGET2)
                    return `我和${this.orderStore.currentOrder.Target2Info}`
                else return `${this.orderStore.currentOrder.Target1Info}和${this.orderStore.currentOrder.Target2Info}`
            }
            else return "个人";
        },
    }
})
