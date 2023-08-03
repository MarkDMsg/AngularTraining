import { Product } from "./product.types";

export interface ProductWithQuantity extends Product {
    quantity: number;
}