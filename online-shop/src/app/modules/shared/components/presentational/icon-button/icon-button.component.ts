import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../types/product.types';

@Component({
  standalone: true,
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() iconType !: string;
  @Output() deleteFromCartEvent: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() product!:Product;
  deleteFromCart(){
    this.deleteFromCartEvent.emit(this.product);
  }
}
