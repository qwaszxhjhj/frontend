import { OrderProduct } from "./orderproduct";

export interface Product {
    productId: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    orderProducts: OrderProduct [];
}