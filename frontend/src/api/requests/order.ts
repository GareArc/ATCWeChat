import {OrderMeta} from "@/models/OrderMeta";
import {get, post} from "@/api/http";
import {Response} from "@/models/Response";
import {Order} from "@/models/Order";

export async function getAllOrderMetas(): Promise<Response<OrderMeta[]>>{
    return get<OrderMeta[]>("/order/all");
}

export async function addNewOrder(order: Order): Promise<Response<boolean>>{
    return post<boolean>("/order/add", order);
}

export async function getOrderByUUID(uuid: string): Promise<Response<Order>>{
    return get<Order>(`/order/uuid/${uuid}`);
}
