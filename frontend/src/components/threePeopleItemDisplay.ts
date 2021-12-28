import {defineComponent, PropType} from "vue";

//@ts-ignore
import {vanCell} from "@/wxcomponents/cell/index";
//@ts-ignore
import {vanCellGroup} from "@/wxcomponents/cell-group/index";
//@ts-ignore
import {vanSwipeCell} from "@/wxcomponents/swipe-cell/index";
import {Item} from "@/models/Item";
import {getModule} from "vuex-module-decorators";
import OrderStore from "@/store/modules/OrderStore";

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
        }
    },
    data(){
        return {
            orderStore: getModule(OrderStore)
        }
    },
    methods: {
        deleteItem(): void{
            this.orderStore.currentOrder.delFromThreePeople(this.item);
        }
    },
    computed: {
        getItem(): Item{
            return this.item
        }
    }
})
