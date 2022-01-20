import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filters } from '../../../shared/models/filters';
import { Produit } from '../../../shared/models/produit';
import { ShopDataService } from '../../shop-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() $filters: Filters = new Filters();

  @Output() filtersEmitter = new EventEmitter<Filters>();

  filterForm:FormGroup = this.fb.group({
    maxPriceFilter: [this.$filters.price],
    gamepassFilter: [this.$filters.gamepass]
  });

  constructor(private fb: FormBuilder,
              private shopDataService: ShopDataService) { }

  ngOnInit(): void {
    this.shopDataService.getMaxPrice().then(price => {
      this.$filters.price = price;
      this.filterForm.get('maxPriceFilter')?.setValue(price);
    });
  }

  onSubmit() {
    this.$filters.price = this.filterForm.get('maxPriceFilter')?.value;
    this.$filters.gamepass = this.filterForm.get('gamepassFilter')?.value;
    this.filtersEmitter.emit(this.$filters);
  }

}
