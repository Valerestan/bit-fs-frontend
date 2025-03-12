import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-colleciones',
  imports: [CurrencyPipe],
  templateUrl: './colleciones.component.html',
  styleUrl: './colleciones.component.css',
})
export class CollecionesComponent {
  productsService = inject(ProductsService);

  productos: any[] = [];

  ngOnInit() {
    this.obtenerTodosLoscoleccion();
  }

  obtenerTodosLoscoleccion() {
    this.productsService.getAllProducts().subscribe((respuesta: any) => {
      console.log('respuesta:', respuesta);
      this.productos = respuesta.data.filter(
        (producto: any) => producto.categoria === 'coleccion'
      );
    });
  }
}
