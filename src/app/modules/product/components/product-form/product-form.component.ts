import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.createProductForm();
  }

  ngOnInit() {}

  createProductForm() {
    return this.fb.group({
      title: ['', [Validators.required]],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  get formControl() {
    return this.productForm.controls;
  }

  Submit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['products']);
      });
    }
  }
}
