import { Component, inject, Input, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.css',
})
export class NavigationComponent {
  productsService = inject(ProductsService);
  cantidad: Signal<number> = this.productsService.cantidadCarrito;
}
