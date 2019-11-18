import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  page: number;
  previousPage: number;
  showPagination: boolean;

  constructor() { }

  ngOnInit() {
    this.page = 1;
    this.previousPage = 1;
  }

}
