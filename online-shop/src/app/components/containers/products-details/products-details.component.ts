import { Component } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import { MOCK_PRODUCTS } from 'src/app/mocks/products.mocks';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  product: Product = MOCK_PRODUCTS[0];
}
