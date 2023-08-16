
import { AddProduct } from "../../../interfaces/products";
import { sendServiceRequest } from "../../utils";


const productServiceUrl = process.env.PRODUCT_SERVICE

export async function addProduct(productObj: AddProduct): Promise<any> {
    const response = await sendServiceRequest(
        `${productServiceUrl}/addproduct`,
        "POST",
        productObj
    );
    const data = await response.json();
    return data;
}

export async function getProducts(): Promise<any> {
    const response = await sendServiceRequest(
        `${productServiceUrl}/products`,
        "GET"
       
    );
    const data = await response.json();
    return data;
}

export async function deleteProduct(id: string, user_id:string): Promise<any> {

    const response = await sendServiceRequest(
        `${productServiceUrl}/deleteproduct/${id}`,
        "DELETE",
        {user_id}       
    );
    const data = await response.json();
    return data

}

export async function updateProduct(id: string, productObj:AddProduct) {
    const response = await sendServiceRequest(
        `${productServiceUrl}/updateproduct/${id}`,
        "PATCH",
        productObj
       
    );
    const data = await response.json();
    return data
}
