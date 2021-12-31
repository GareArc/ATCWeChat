import {defineComponent} from "vue";

// @ts-ignore
import {vanLoading} from "@/wxcomponents/loading/index";
//@ts-ignore
import {vanButton} from "../../../wxcomponents/button/index";
// @ts-ignore
import {vanOverlay} from "@/wxcomponents/overlay/index";
import {getModule} from "vuex-module-decorators";
import OrderStore from "@/store/modules/OrderStore";
import {addNewOrder} from "@/api/requests/order";
import {Order} from "@/models/Order";

export default defineComponent({
    components: {
        vanButton,
        vanLoading,
        vanOverlay
    },
    data() {
        return {
            isLoading: false,
            orderStore: getModule(OrderStore)
        }
    },
    methods: {
        async uploadOrder(): Promise<void>{
            this.isLoading = true;
            await addNewOrder(this.orderStore.currentOrder)
              .then(value => value);
            this.orderStore.setCurrentOrder(new Order());
            this.isLoading = false;
        }
    },
    computed: {

    }
})
