import {defineComponent, PropType} from "vue";
import {Order} from "@/models/Order";
//@ts-ignore
import {vanCellGroup} from "@/wxcomponents/cell-group/index"
//@ts-ignore
import {vanCell} from "@/wxcomponents/cell/index"
import {Item, Relation, ShareType} from "@/models/Item";

export default defineComponent({
    props: {
        order: {
            required: true,
            type: Object as PropType<Order>
        }
    },
    components: {
        vanCell,
        vanCellGroup
    },
    data() {

    },
    methods: {
        getItemDesc(item: Item): string{
            if(item.relation === Relation.ALL) return "三人";
            else if(item.relation === Relation.INDIVIDUAL) return "个人";
            else {
                if(item.shareType === ShareType.TARGETS) return `${this.order.Target1Info}和${this.order.Target2Info}`;
                else if(item.shareType === ShareType.WITHTARGET1) return `记录者与${this.order.Target1Info}`;
                else return `记录者与${this.order.Target2Info}`;
            }
        }
    },
    computed: {

    }
})
