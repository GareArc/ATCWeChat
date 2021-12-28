import {Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "../../store/index";
import {Order} from "../../models/Order";

@Module({
    name: "orderStore",
    store,
    dynamic: true
})
export default class OrderStore extends VuexModule{
    currentOrder: Order = new Order();
    targets = ["Gareth", "Charlie", "Ethan"];
}
