import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  products: string[] = [
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
  ];
  image!: string;
  sendData(x:string){
    this.image = x;
  }
}
