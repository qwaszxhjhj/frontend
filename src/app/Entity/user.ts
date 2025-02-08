import { Order } from "./order";
import { ShoppingCart } from "./shoppingcart";

export interface User {
    uid: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    shoppingCartId: number;
    orders: Order[];
}