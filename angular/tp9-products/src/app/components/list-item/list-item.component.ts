import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'tr[app-table-row]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  product: Product = new Product();

  constructor() { }

  ngOnInit() {
  }

}
