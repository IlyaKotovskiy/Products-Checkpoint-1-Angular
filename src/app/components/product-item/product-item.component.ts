import { Component, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [StarsComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() public img: string;
  @Input() public title: string;
  @Input() public category: string;
  @Input() public price: number;
  @Input() public rating: number;
}
