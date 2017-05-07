import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', 
                canActivate: [ ProductDetailGuard ],
                component: ProductDetailComponent },
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [  ]
})
export class ProductModuleRouting {

};