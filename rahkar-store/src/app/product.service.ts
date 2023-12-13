import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProductService{
    products: any[] = [
        {
          id: 1,
          name: 'HTML cource',
          Image:'assets/download (1).png' ,
          price: '300',
          description: "managed by Kamal Gharejelou"
        },
        {
            id: 2,
            name: 'CSS cource',
            Image: 'assets/download (2).png',
            price: '500',
            description: "managed by Alireza EbrahimKhani"
          },
          {
            id: 3,
            name: 'Angular cource',
            Image: 'assets/download.png',
            price: '900',
            description: "managed by Aboulfazl narm"
          },
      ];
}