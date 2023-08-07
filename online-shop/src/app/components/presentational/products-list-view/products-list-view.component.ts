import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product.types';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss']
})
export class ProductsListViewComponent implements OnInit {
  @Input() products!: Product[] | null;
  @Output() addToCartEvent = new EventEmitter<Product>();
  @Output() logoutEvent = new EventEmitter();
  isAdmin!: string | null;

  ngOnInit() {
    this.isAdmin = localStorage.getItem('isAdmin');
  }

  addToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }

  logout(): void {
    this.logoutEvent.emit(null);
  }

}
