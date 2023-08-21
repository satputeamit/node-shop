import { AddOrder, UpdateOrder } from "../../../interfaces/orders";
import { sendServiceRequest } from "../../utils";


const orderServiceUrl = process.env.ORDER_SERVICE

export async function addOrder(orderObj: AddOrder): Promise<any> {

    const response = await sendServiceRequest(
        `${orderServiceUrl}/addorder`,
        "POST",
        orderObj
    );
    const data = await response.json();
    return data;

}

export async function getOrders(user_id: string): Promise<any> {
    const response = await sendServiceRequest(
        `${orderServiceUrl}/orders/${user_id}`,
        "GET"

    );
    const data = await response.json();
    return data;

}

export async function deleteOrder(id: string, user_id: string): Promise<any> {
    const response = await sendServiceRequest(
        `${orderServiceUrl}/deleteorder/${id}`,
        "DELETE",
        { user_id }
    );
    const data = await response.json();
    return data

}

export async function updateOrder(id: string, orderObj: UpdateOrder) {
    const response = await sendServiceRequest(
        `${orderServiceUrl}/updateorder/${id}`,
        "PATCH",
        orderObj

    );
    const data = await response.json();
    return data
}
// Update, delete
