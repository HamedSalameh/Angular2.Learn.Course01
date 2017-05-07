import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { SharedModule} from '../shared/shared.module';
import { ProductService} from './product.service';
import { ProductModuleRouting} from './product-routing.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        ProductModuleRouting
        
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {

}