import {defineComponent} from "vue";
import newItemTab from "@/pages/addPage/component/newItemTab.vue";
import itemListTab from "@/pages/addPage/component/itemListTab.vue";
import submitOrderTab from "@/pages/addPage/component/submitOrderTab.vue";
import {Item, Relation, ShareType} from "@/models/Item";
import {getModule} from "vuex-module-decorators";
import OrderStore from "@/store/modules/OrderStore";
import targetItemDisplay from "@/components/targetItemDisplay.vue";

export default defineComponent({
    components: {
        // @ts-ignore
        newItemTab,
        // @ts-ignore
        itemListTab,
        // @ts-ignore
        submitOrderTab,
        // @ts-ignore
        targetItemDisplay
    },
    data() {
        return {
            orderStore: getModule(OrderStore)
        }
    },
    methods: {

    },
    computed: {

    }
})
