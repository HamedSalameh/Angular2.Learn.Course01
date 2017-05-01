import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'ai-star',
    styleUrls: ['app/shared/star.component.css'], 
    templateUrl: 'app/shared/star.component.html'
})

export class StarComponent {
    @Input() rating: number = 4;
    starWidth: number;
    
    // This is an event that the component fires
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    // ngOnChanges responses only to input properties
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    // Since ratingClicked is of type EventEmitter, we use call .emit method of it to fire an
    // event to the parent container or to the external env
    OnClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}