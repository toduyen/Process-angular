import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs";
import {ProductType} from "../Model/ProductType";
const apiUrl = "https://jsonplaceholder.typicode.com/todos";
@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  constructor(private http: HttpClient) {}
  getData():Observable<ProductType[]>{
    return this.http.get<ProductType[]>(apiUrl);
  }
}
