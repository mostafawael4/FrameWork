import { products } from './../gallery/gallery.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend',
  standalone: true,
  imports: [],
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.css',
})
export class RecommendComponent {
  recommendList: products[] = [
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/bb669524e384aea9a0c88a52f480aefaf8322bf5.webp',
    },
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/db528a341385f7b245208571175867d913d743f0.webp',
    },
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/ec10862c9e4a2cf926169c448f0f22aa4e45d8f5.webp',
    },
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/fcd06081826a7a30fbe68b5df1141ec0897a278a.webp',
    },
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/50c6f565e4c0f17cbf2c357f7e597bc6c75d5c43.webp',
    },
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/0439f532ba1a076669bbab167bc6f303e6776f24.webp',
    },
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/06cccfb9ca95a6baa7511f57126606c64cd39ff9.webp',
    },
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/3653f55f75d9938beb231976b5a94f1a51447632.webp',
    },
    {
      pName: 'Relaxed Fit Hoodie',
      pPrice: 'EGP 1099.00',
      pImage:
        '../../assets/images/776fd21ab0fd4c949b26b1e496690581a210f689.webp',
    },
  ];
}
