import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/shared/types/product.types';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html'
})
export class ProductsFormComponent implements OnChanges{

  @Input() product! :Product | null;
  @Input() formType!:string;
  constructor(private productService:ProductService, private router:Router,private formBuilder: FormBuilder){
  }

  productFormGroup = this.formBuilder.group({
    name: ['',Validators.required],
    category: ['',Validators.required],
    price: ['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    description: ['',Validators.required],
    image: ['',Validators.required]
  });

  ngOnChanges():void{
    if(this.product){
      this.productFormGroup.controls['name'].setValue(this.product.name);
      this.productFormGroup.controls['category'].setValue(this.product.category);
      this.productFormGroup.controls['price'].setValue(this.product.price.toString());
      this.productFormGroup.controls['description'].setValue(this.product.description);
      this.productFormGroup.controls['image'].setValue(this.product.image);
    }
    
  }
 


  editProduct(data:FormGroup):void{
    this.productService.editProduct(<Product>({id:this.product?.id,
      name:data.controls['name'].value,
      category:data.controls['category'].value,
      price:Number(data.controls['price'].value),
      image:data.controls['image'].value,
      description:data.controls['description'].value,}));
      this.router.navigateByUrl('/');
  }

  addProduct(data:FormGroup):void{
    this.productService.addProduct(<Product>({id:this.product?.id,
      name:data.controls['name'].value,
      category:data.controls['category'].value,
      price:Number(data.controls['price'].value),
      image:data.controls['image'].value,
      description:data.controls['description'].value,}));
      this.router.navigateByUrl('/');
  }
  

}
