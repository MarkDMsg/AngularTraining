import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-products-form-view',
  templateUrl: './products-form-view.component.html',
  styleUrls: ['./products-form-view.component.scss']
})
export class ProductsFormViewComponent {
  @Input() formType !: string;
  @Input() productFormGroup !: FormGroup;
  @Output() editProductEmitter = new EventEmitter<FormGroup>();
  @Output() addProductEmitter = new EventEmitter<FormGroup>();
  onSubmit(): void {
    if(this.formType=='edit'){
      this.editProductEmitter.emit(this.productFormGroup);
    }
    else if(this.formType=='add'){
      this.addProductEmitter.emit(this.productFormGroup);
    }
    
  }
}
