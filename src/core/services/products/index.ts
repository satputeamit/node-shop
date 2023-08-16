
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
