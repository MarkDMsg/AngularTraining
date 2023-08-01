import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from '../modules/services/shopping-cart.service';
import { Product } from '../modules/shared/types/products.types';

@Injectable({ providedIn: 'root' })
export class ProductService {
    readonly ROOT_URL = environment.apiUrl;

    constructor(private http: HttpClient, private shoppingCartService: ShoppingCartService) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.ROOT_URL + '/products');
    }

    getProductById(id: string): Observable<Product> {
        return this.http.get<Product>(this.ROOT_URL + '/products/' + id);
    }

    deleteProduct(id: string): void {
        this.http.delete(this.ROOT_URL + '/products/' + id).subscribe();
    }

    addProductToCart(product: Product) {
        this.shoppingCartService.addProductToCart(product);
    }

}