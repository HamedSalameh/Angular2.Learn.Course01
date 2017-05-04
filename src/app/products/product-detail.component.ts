import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute  } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Details";
    product: IProduct;

    constructor(private _route:ActivatedRoute, private _router:Router) {
        
    }

    ngOnInit() : void {
        // use snapshout to get parameters from the router 
        // from the activated router
        // the plus (+) before 'this' = will convert the parameter string to ID
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack() : void {
        this._router.navigate(['products']);
    }
}