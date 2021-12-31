import {defineComponent, PropType} from "vue";
import {Order} from "@/models/Order";
//@ts-ignore
import {vanCellGroup} from "@/wxcomponents/cell-group/index";
//@ts-ignore
import {vanCell} from "@/wxcomponents/cell/index";
//@ts-ignore
import {vanButton} from "@/wxcomponents/button/index"
import {Item, Relation, ShareType} from "@/models/Item";
// @ts-ignore
import {vanLoading} from "@/wxcomponents/loading/index";
// @ts-ignore
import {vanOverlay} from "@/wxcomponents/overlay/index";
// @ts-ignore
import {vanPopup} from "@/wxcomponents/popup/index";
// @ts-ignore
import {vanField} from "@/wxcomponents/field/index";
import {deleteOrderByUUID} from "@/api/requests/order";

export default defineComponent({
    props: {
        order: {
            required: true,
            type: Object as PropType<Order>
        },
        uuid: {
            required: true,
            type: String
        }
    },
    components: {
        vanCell,
        vanCellGroup,
        vanButton,
        vanOverlay,
        vanLoading,
        vanField,
        vanPopup
    },
    data() {
        return {
            isLoading: false,
            showPasswordInput: false,
            password: "" as string
        }
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
        },
        async deleteOrder(): Promise<void>{
            const response = await deleteOrderByUUID(this.password, this.uuid);
            if(response.code !== 0){
                console.log(response.errorDescription);
                this.showPasswordInput = false;
                return ;
            }
            this.showPasswordInput = false;
            this.$emit("close-order-popup");
            // await wx.navigateBack();
        },
        onPopupClose(): void{
            (this as any).showPopup = false;
        },
        onPasswordChange(e: any): void{
            console.log(e.detail.value);
            (this as any).password = e.detail.value;
        },
        showDeletePopup(): void{
            (this as any).showPasswordInput = true;
        }

    },
    computed: {

    }
})
