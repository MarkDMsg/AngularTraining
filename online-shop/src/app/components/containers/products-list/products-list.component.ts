import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProducts().subscribe(products => this.products = products);
  }

  addProductToCart(productToAdd: Product): void {
    this.service.addProductToCart(productToAdd);
  }

}
