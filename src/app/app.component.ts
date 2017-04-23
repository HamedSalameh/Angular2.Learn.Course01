import { Component } from '@angular/core';

@Component({

    selector: 'pm-app', //   directive in HTML 
    template:
    `
    <div>
        <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `

})

export class AppComponent {

    pageTitle: string = "Angular 2";

}