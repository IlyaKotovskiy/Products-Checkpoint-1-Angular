import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.scss'
})
export class StarsComponent {
  @Input() public rating: number;

  public fullStars: number;
  public halfStar: boolean;
  public emptyStars: number;

  ngOnInit(): void {
    this.fullStars = Math.floor(this.rating);
    this.halfStar = this.rating - this.fullStars >= 0.5;
    this.emptyStars = 5 - this.fullStars - (this.halfStar ? 1 : 0);
  }
}
