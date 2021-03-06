import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/products";

  constructor(private httpClient: HttpClient) { }

  getProductListPaginate() : Observable<Product[]> {
    const searchUrl = this.baseUrl;
    return this.httpClient.get<Product[]>(searchUrl);
  }
}

export interface GetResponseProducts{
   
}
