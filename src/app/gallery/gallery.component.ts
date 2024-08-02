import { Component } from '@angular/core';
import { RecommendComponent } from '../recommend/recommend.component';

export interface products{
  pName : string,
  pPrice : string,
  pImage : string
}


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  productList: products[] = [
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/0439f532ba1a076669bbab167bc6f303e6776f24.webp"},
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/10d7a7b07ed03d5dd42f8c5250d2ea7278ef6b03.webp"},
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/2dc6b1e98152b3f884813304b4c82946a69ec0fe.webp"},
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/69cf8f046d8e13667f2f21c3dd008c881759a9d4.webp"},
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/776fd21ab0fd4c949b26b1e496690581a210f689.webp"},
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/7946d95bdc84f04df5b4e28661e42f64e870fce9.webp"},
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/86e4ee62c1a9bb0ca550560654364c7a24b91279.webp"},
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/9e4892977ea1e8038a6e7378fd809e0411cd1343.webp"},
    { pName: 'Relaxed Fit Hoodie', pPrice: 'EGP 1099.00' , pImage : "../../assets/images/fcd06081826a7a30fbe68b5df1141ec0897a278a.webp"}
  ];
}
