import { ProductFromOrder } from './product-from-order.types'
export interface Order{
    customerId: string;
    products: ProductFromOrder[];
}