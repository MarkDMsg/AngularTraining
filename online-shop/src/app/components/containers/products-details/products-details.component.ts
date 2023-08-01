import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product !: Product;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.service.getProductById(id).subscribe(product => this.product = product);
  }

  deleteProduct(id: string): void {
    this.service.deleteProduct(id);
  }

}
