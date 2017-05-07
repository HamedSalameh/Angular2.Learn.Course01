import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent} from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [ 
    BrowserModule ,
    HttpModule,
    ProductModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', component: WelcomeComponent, pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
    ],
  declarations: [ 
    AppComponent, 
    WelcomeComponent,
     ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
