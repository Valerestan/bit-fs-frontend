import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);

  productos: any[] = [];
  carrito: any[] = [];

  ngOnInit() {
    this.obtenerTodosLosProductos();
  }

  obtenerTodosLosProductos() {
    this.productsService.getAllProducts().subscribe((respuesta: any) => {
      console.log('respuesta:', respuesta);
      this.productos = respuesta.data.filter(
        (producto: any) => producto.categoria === 'productos'
      );
    });
  }

  onClick(producto: any) {
    this.carrito.push(producto);
    this.productsService.cambiarCantidad(this.carrito.length);
  }
}
