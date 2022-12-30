import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {
  @Output()
  selectedFilter = new EventEmitter<string>();

  public actualFilter = "discount";

  public filterTypes = [
    {type: "discount", name:"% de Desconto"},
    {type: "min", name:"Maior preço"},
    {type: "max", name:"Menor preço"},
    {type: "title", name:"Título"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.selectedFilter.emit(value);
  }

}
