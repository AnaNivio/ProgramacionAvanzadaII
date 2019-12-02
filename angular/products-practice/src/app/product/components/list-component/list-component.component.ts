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
      this.page = 0;
      this.previousPage = 0;
      this.fillProducts(this.page);
  }

  fillProducts(page: number): void {
    this.productService.getByPageSize(page,)
  }


}
