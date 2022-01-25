import { Component, OnInit } from '@angular/core';
import {ProductTypeService} from "../Service/product-type.service";
import {ProductType} from "../Model/ProductType";
import {LoaderService} from "../Service/loader.service";

@Component({
  selector: 'bai7-callapi-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  Datas:ProductType[] = [];

  constructor(private testData: ProductTypeService , public loader:LoaderService) { }

  ngOnInit(): void {
    this.testData.getData().subscribe(res => {
      this.Datas = res
    })
  }

}
