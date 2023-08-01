import { Product } from "./products.types";

export interface ProductWithQuantity extends Product {
    quantity: number;
}