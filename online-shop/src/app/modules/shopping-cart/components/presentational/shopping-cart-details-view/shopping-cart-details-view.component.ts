import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductWithQuantity } from 'src/app/modules/shared/types/product-with-quantity.type';
import { Product } from 'src/app/modules/shared/types/product.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent implements OnInit{
    @Input() cartProducts!: ProductWithQuantity[];
    @Output() productInCartEvent = new EventEmitter<Product>();
    @Output() checkoutEvent = new EventEmitter();
    ngOnInit(): void {
    }
    deleteFromCartPresentational(product:Product):void{
      this.productInCartEvent.emit(product);
    }
    checkoutProducts():void{
      this.checkoutEvent.emit(null);
    }
}
