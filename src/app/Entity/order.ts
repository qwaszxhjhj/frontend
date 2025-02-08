import { OrderProduct } from "./orderproduct";
import { Product } from "./product";
import { User } from "./user";

export interface Order {
    orderId: number;
    user: User;
    orderProducts: OrderProduct[];
    totalPrice: number;
    status: string;
}