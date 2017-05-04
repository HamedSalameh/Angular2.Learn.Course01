import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    moduleId: module.id
})

export class ProductListComponent implements OnInit {
    
    pageTitle: string = "Products List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        this._productService.getProducts()
            .subscribe( productsResponse => this.products = productsResponse,
            err => this.errorMessage = <any>err        
            );
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = 'Products List: ' + message
    }
}