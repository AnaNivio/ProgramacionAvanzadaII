import { Component, OnInit , OnChanges , Input} from '@angular/core';
import { Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() offset: number;
  @Input() limit: number;
  @Input() size: number;
  @Input() range: number;
  @Input() pages: Observable<number>;

  currentPage: number;
  totalPages: number;

  constructor() { }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);

  }

  ngOnCange() {
    this.getPages(this.offset, this.limit, this.size);

  }

  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    //esto ocasiona error?
    // this.pages = range(-this.range, this.range * 2 + 1).pipe(
    //   map(offset => this.offsetFunction(this.currentPage, offset)),
    //   filter(page => this.isValidPageNumber(page, this.totalPages)));
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  offsetFunction(currentPage: number, offset: number){
      return currentPage + offset;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

}
