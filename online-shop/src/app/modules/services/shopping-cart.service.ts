import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Order } from '../shared/types/order.types';
import { ProductWithQuantity } from '../shared/types/product-with-quantity.type';
import { Product } from '../shared/types/products.types';
@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
    productsInCart: ProductWithQuantity[] = [];

    readonly ROOT_URL = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getProductsFromCart(): ProductWithQuantity[] {
        return this.productsInCart;
    }

    addProductToCart(product: Product): void {
        const existingProduct = this.productsInCart.find(x => x.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            this.productsInCart.push({ ...product, quantity: 1 });
        }
    }

    orderPorducts(order: Order): void {
        this.http.post<Order>(this.ROOT_URL + '/orders', order).subscribe();
        this.productsInCart = [];
    }

    deleteProductFromCart(product: Product): void {
        const existingProduct = this.productsInCart.find(x => x.id === product.id);
        if (existingProduct) {
            if (existingProduct.quantity == 1) {
                this.productsInCart = this.productsInCart.filter(e => e.id != existingProduct.id);
            }
            else {
                existingProduct.quantity -= 1;
            }
        }
    }

}