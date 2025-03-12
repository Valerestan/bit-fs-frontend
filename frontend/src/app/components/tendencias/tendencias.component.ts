import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CurrencyPipe,],
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css',
})
export class TendeciasComponent implements OnInit {
  productsService = inject(ProductsService);

  productos: any[] = [];

  ngOnInit() {
    this.obtenerTodosLostendencias();
  }

  obtenerTodosLostendencias() {
    this.productsService.getAllProducts().subscribe((respuesta: any) => {
      console.log('respuesta:', respuesta);
      this.productos = respuesta.data.filter(
        (producto: any) => producto.categoria === 'tendencias'
      );
    });
  }
}
