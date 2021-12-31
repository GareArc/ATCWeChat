import {defineComponent} from "vue";
// @ts-ignore
import {vanCell} from "@/wxcomponents/cell/index";
// @ts-ignore
import {vanCellGroup} from "@/wxcomponents/cell-group/index";
// @ts-ignore
import {vanPopup} from "@/wxcomponents/popup/index";
// @ts-ignore
import {vanLoading} from "@/wxcomponents/loading/index";
// @ts-ignore
import {vanOverlay} from "@/wxcomponents/overlay/index";
import OrderPopup from "@/pages/historyPage/components/OrderPopup.vue";
import {OrderMeta} from "@/models/OrderMeta";
import {getAllOrderMetas, getOrderByUUID} from "@/api/requests/order";
import {Order} from "@/models/Order";

export default defineComponent({
    components: {
        vanCell,
        vanCellGroup,
        vanPopup,
        vanLoading,
        vanOverlay,
        // @ts-ignore
        OrderPopup
    },
    async onShow() {
        await (this as any).loadOrderMetas();

    },
    data() {
        return {
            isLoading: true,
            showPopup: false,
            orderMetaList: [] as OrderMeta[],
            selectedOrder: null as Order|null,
        }
    },
    methods: {
        async loadOrderMetas(): Promise<void>{
            (this as any).isLoading = true;
            // //TODO: test
            // const m: OrderMeta = {
            //     uuid: "uuid1",
            //     time: "time1"
            // };
            // (this as any).orderMetaList.push(m);
            // //TODO: end

            await getAllOrderMetas()
              .then(value => (this as any).orderMetaList = value.data);
            (this as any).isLoading = false;
        },
        async loadSelectedOrder(meta: OrderMeta): Promise<void>{
            (this as any).isLoading = true;
            // //TODO: test
            // const o: Order = new Order();
            // for(const i of Array.from(Array(10)).keys()){
            //     o.ThreePeople.push({price: 1, relation: Relation.SHARED, quantity: i, isTaxed: true, shareType: ShareType.TARGETS});
            // }
            // (this as any).selectedOrder = o;
            // //TODO: end

            await getOrderByUUID(meta.uuid)
              .then(value => (this as any).selectedOrder = value.data);
            (this as any).isLoading = false;
            (this as any).showPopup = true;
        },
        onPopupClose(): void{
            (this as any).showPopup = false;
        }
    },
    computed: {

    }
});
