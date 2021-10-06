import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { GetResponseProducts, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>this.listProducts());
  }

  listProducts(): void {
    this.handleListProducts();
  }

  handleListProducts() {
    this.productService.getProductListPaginate()
                        .subscribe(this.processResult());
  }

    processResult() {
    return (data: Product[]) => {
      this.products = data;
      console.log(data);
    }
  }

}
