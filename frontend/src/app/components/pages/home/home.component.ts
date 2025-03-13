import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../interfaces/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productsService = inject(ProductsService);

  productos: any[] = [];
  carrito: any[] = [];

  ngOnInit() {
    this.obtenerTodosLoshome();
  }

  obtenerTodosLoshome() {
    this.productsService.getAllProducts().subscribe((respuesta: any) => {
      console.log('respuesta:', respuesta);
      this.productos = respuesta.data.filter(
        (producto: any) => producto.categoria === 'home'
      );
    });
  }
  onClick(producto: any) {
    this.carrito.push(producto);
    this.productsService.cambiarCantidad(this.carrito.length);
  }
}
