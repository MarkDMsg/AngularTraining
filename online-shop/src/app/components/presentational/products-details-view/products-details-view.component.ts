import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss']
})
export class ProductsDetailsViewComponent {
  @Input() product !: Product;

  @Output() deleteProductEvent = new EventEmitter<string>();

  deleteProduct(): void {
    this.deleteProductEvent.emit(this.product.id);
  }

}
