import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent implements OnInit{
    @Input() cartProducts!: Product[];
   
    ngOnInit(): void {
      this.cartProducts.forEach(product=>(product.quantity=0));
    }
}
