import { Component, inject } from '@angular/core';
import { ProductListService } from '../../service/product-list.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public productsListService: ProductListService = inject(ProductListService);

  ngOnInit(): void {
    this.productsListService.getProducts();
  }
}