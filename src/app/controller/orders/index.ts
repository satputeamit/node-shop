import { addOrder, deleteOrder, getOrders, updateOrder } from "../../../core/services/orders";
import { Request, Response, NextFunction } from "express";


export async function addNewOrder(
  req: Request | any,
  res: Response,
  next: NextFunction
): Promise<void> {
  var body = req.body
  body.user_id = req.user_info.id
  const data = await addOrder(req.body);
  res.json(data);
}

export async function getAllOrders(
  req: Request | any,
  res: Response,
  next: NextFunction
): Promise<void> {
  const data = await getOrders(req.user_info.id);
  res.json(data);
}

export async function deleteOrderById(
  req: Request | any,
  res: Response,
  next: NextFunction
): Promise<void> {

  const data = await deleteOrder(req.params.id, req.user_info.id);
  res.json(data);
}

export async function updateOrderRecord(
  req: Request | any,
  res: Response,
  next: NextFunction
): Promise<void> {
  var id = req.params.id
  var body = req.body
  body.user_id = req.user_info.id
  const data = await updateOrder(id, body);
  res.json(data);
}

