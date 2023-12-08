import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.scss'
})
export class ProductDetailsComponent {
  item : any
  constructor(private route: ActivatedRoute,private productService: ProductService){
    this.route.params.subscribe({
      next:(value: any)=>{
        console.log(value);
        this.item = this.productService.products.filter((item)=> item.id == value.id)[0]
        console.log(this.item);
        
      }
    })
  }
}