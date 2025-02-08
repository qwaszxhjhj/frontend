import { Order } from "./order";
import { Product } from "./product";
import { ShoppingCart } from "./shoppingcart";

export interface OrderProduct {
    orderProductId: number;
    name: String;
    orderId: number;
    shoppingCart: ShoppingCart;
    productId: number;
    quantity: number;
}