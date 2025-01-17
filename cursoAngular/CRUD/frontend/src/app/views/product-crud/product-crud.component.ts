import { HeaderService } from './../../compoments/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Router} from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produto',
      icon: 'storefront',
      routerUrl: '/products'
    }
  }

  ngOnInit(): void {
  }
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
