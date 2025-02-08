import { Product } from "../product/product";
import { User } from "../user/user";

export interface Order {
    orderId: number;
    user: User;
    products: Product[];
    totalPrice: number;
    status: string;
}