import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template:`
    <div>
        <h1>
            {{pageTitle}}
        </h1>
        <div>Let's Rock NG2 !</div>
    </div>
    `
    
})

export class AppComponent {
    pageTitle: string = "My Angular2 App"
}