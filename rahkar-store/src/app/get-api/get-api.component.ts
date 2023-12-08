import { ProductsService } from './../products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetApiComponent {
  ProductsService = inject(ProductsService) ;


  }
ngOnInit(): void {
  this.ProductsService.getp
  
}
    
  }

}
