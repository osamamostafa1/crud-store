import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.activatedRoute.params.subscribe((prams) => {
      this.productId = prams['id'];
    });
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProductById(this.productId).subscribe((res: any) => {
      this.product = res;
    });
  }
}
