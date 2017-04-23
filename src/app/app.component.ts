import { Component } from '@angular/core';

@Component({

    selector: 'pm-app', //   directive in HTML 
    template:
    `
    
    <div>
        <h1>{{pageTitle}}</h1>
        <div>
            Let's Rock NG2 - NG4
        </div>
    </div>

    `

})

export class AppComponent {

    pageTitle: string = "Angular 2";

}