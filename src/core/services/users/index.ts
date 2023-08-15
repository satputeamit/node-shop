import jwt from "jsonwebtoken";
import { User, UserLogin } from "../../../interfaces/users";
import { sendServiceRequest } from "../../utils";


const userServiceUrl = process.env.USER_SERVICE

export async function addUser(userObj: User): Promise<any> {
    const response = await sendServiceRequest(
        `${userServiceUrl}/adduser`,
        "POST",
        userObj
    );
    const data = await response.json();
    return data;
}

export async function login(userObj: UserLogin): Promise<any> {
    const response = await sendServiceRequest(
        `${userServiceUrl}/login`,
        "POST",
        userObj
    );
    const data = await response.json();
    return data;
}