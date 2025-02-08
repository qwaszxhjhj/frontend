import { User } from "./user";
import { OrderProduct } from "./orderproduct";

export interface ShoppingCart {
    cartid: number;
    user: User;
    orderProducts: OrderProduct[];
}
