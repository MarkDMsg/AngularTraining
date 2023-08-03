import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product.types';
import { User } from 'src/app/modules/shared/types/user.types';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{
  products: Product[] = [];
  user!:User;
  constructor(private service: ProductService, private authenticationService:AuthService) { }
  ngOnInit(): void {
    this.getProducts();
    this.authenticationService.getUserProfile().subscribe(u=>
      {this.user=u;
      console.log(u);
      localStorage.setItem('userId',this.user.id!);
      let isAdmin='no';
      this.user.roles.forEach(role=>{
        if(role=='admin'){
          isAdmin='yes';
        }
      })
      localStorage.setItem('admin',isAdmin);
    });
  
          // this.currentUserSubject.next(this.userProfile);
    
  }


  getProducts(): void {
    this.service.getProducts().subscribe(products => this.products = products);
  }

  addProductToCart(productToAdd: Product): void {
    this.service.addProductToCart(productToAdd);
  }

  logout():void{
    this.authenticationService.logout();
  }

}
