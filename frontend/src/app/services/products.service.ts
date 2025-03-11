import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  httpClient = inject(HttpClient);

  createProduct(product: Product) {
    return this.httpClient.post('http://localhost:3000/productos', product);
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/productos');
  }

  getOneProduct(id: string) {
    return this.httpClient.get(`http://localhost:3000/productos/${id}`);
  }

  updateProduct(id: string, product: Product) {
    return this.httpClient.put(
      `http://localhost:3000/productos/${id}`,
      product
    );
  }

  deleteOneProduct(id: string) {
    return this.httpClient.delete(`http://localhost:3000/productos/${id}`);
  }
}
