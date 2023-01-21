import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(params = {}) {
    return this.http.get<any>(environment.baseUrl + 'products', {
      params: params,
    });
  }
  getProductById(productId: any) {
    return this.http.get<any>(environment.baseUrl + 'products/' + productId);
  }

  addProduct(model: any) {
    return this.http.post<any>(environment.baseUrl + 'products', model);
  }
}
