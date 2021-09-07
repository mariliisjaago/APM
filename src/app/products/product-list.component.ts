import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';


@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    isShowImages: boolean = false;
    products: IProduct[] = [];
    filteredProducts: IProduct[] = [];

    private _productService;

    private _listFilter: string = '';

    constructor(productService: ProductService) {
        this._productService = productService;
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value.toLowerCase();
        this.filteredProducts = this.performFiltering();
    }

    changeTitle(message: string): void {
        this.pageTitle = 'Product List: ' + message;
        console.log(message);
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }

    performFiltering(): IProduct[] {
        return this.products.filter((product: IProduct) => 
            product.productName.toLowerCase().includes(this.listFilter));
    }

    toggleImage(): void {
        this.isShowImages = !this.isShowImages;
    }


}