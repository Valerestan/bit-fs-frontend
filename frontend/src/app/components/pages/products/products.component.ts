import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = []; 
  productsService = inject(ProductsService);

  ngOnInit() {
    this.obtenerTodosLosProductos();
  }

  obtenerTodosLosProductos() {
    this.productsService.getAllProducts().subscribe(
      (respuesta: any[]) => {
        console.log('Respuesta recibida:', respuesta); 
        if (respuesta && respuesta.length > 0) {
          this.products = respuesta; 
        } else {
          console.log('No se encontraron productos.');
        }
      },
      (error) => {
        console.error('Error al obtener productos:', error); 
      }
    );
  }
}
