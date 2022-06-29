import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APP_ID, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  ProductForm:any | FormGroup;
  constructor(private _FormBuilder:FormBuilder) {
    this.ProductFormModel()
   }

  ngOnInit(): void {
  }

  ProductFormModel(){
    this.ProductForm = this._FormBuilder.group({
      Name:['',[Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]],
      Email: ['', [Validators.required, Validators.email]],
      Image:['']
    })
  }

  GetImage(ImageData:any){
    
    const _GetImage = ImageData.target.files[0];
    this.ProductForm.get('Image').setValue(_GetImage);
    // this.ImageName = _GetImage.name;
    // this.UpdateForm.get('Image').setValue(_GetImage);
  }

  SubmitProductForm(){
    let MyFormValue = new FormData();
    // _FormData.append('NewName', this.UpdateForm.get('OldName').value);
    MyFormValue.append('Name',this.ProductForm.get('Name').value);
    MyFormValue.append('Email',this.ProductForm.get('Email').value);
    MyFormValue.append('Image',this.ProductForm.get('Image').value);
    console.log(MyFormValue);
  }

}
