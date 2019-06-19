import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {

  @Input('chosen') chosen;
  categories$;
  constructor(private categorySrvc: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categorySrvc.getAll();
  }

}
