import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
  id: number;
  price: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'oppo', price: 12000},
  {id: 2, name: 'vivo', price: 10000},
  {id: 3, name: 'realme', price: 15000},
  {id: 4, name: 'apple', price: 50000},
  {id: 5, name: 'oneplus', price: 30000},
  {id: 6, name: 'samsung', price: 20000},
  
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  ngOnInit(): void {

    
  }

  displayedColumns: string[] = ['id', 'name', 'price',];
  dataSource = ELEMENT_DATA;

}
