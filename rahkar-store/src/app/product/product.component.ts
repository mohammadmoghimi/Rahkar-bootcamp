import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor (private Productservice: ProductService,
    private activatedRoute:ActivatedRoute, private router: Router){

   this.products= this.Productservice.products
   
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log( this.id );
  
  }
  id!:string|null
  products:any
  onClick(id: string) {
    this.router.navigate(['products', id])
  }
}
