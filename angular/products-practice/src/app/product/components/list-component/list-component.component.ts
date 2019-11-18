import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
  providers: [ NgbPaginationConfig ]
})
export class ListComponentComponent implements OnInit {

  message: string;

  productsList: any = [];
  totalItems: number;
  page: number;
  previousPage: number;
  showPagination: boolean;

  constructor(private productService: ProductService, private route: ActivatedRoute, private config: NgbPaginationConfig, private router: Router) {
    this.config.boundaryLinks = true;
}

  ngOnInit() {
      this.page = 1;
      this.previousPage = 1;
      this.fillProducts(this.page);
  }

  fillProducts(page: number): void {

    this.productService.getProducts()
    .subscribe(
      response => {
        if ((!response) || (response && response.total === 0)) {
          this.productsList = [];
          this.showPagination = false;
        } else {
          this.totalItems = response.size;
          this.page = response.page;
          this.showPagination = true;
          
          for (let index = 0; index < this.totalItems; index++) {
            const productsList = array[index];
            
          }
        }
      },

      error => {
        if (error.status === 401) {
          this.message = 'Usuario no tiene permisos para realizar la accion';
        } else if (error.status === 403) {
          this.message = 'Usuario no puede entrar a este sitio';
        } else if (error.status === 404) {
          this.message = 'Productos no hallados';
        }
      });
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.fillProducts(this.page - 1);
    }
  }

}
