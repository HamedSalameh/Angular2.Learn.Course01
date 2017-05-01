import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector:'ai-star',
    styleUrls: ['app/shared/star.component.css'],
    templateUrl: 'app/shared/star.component.html'
})

export class StarComponent {
    @Input() rating: number = 4;
    starWidth: number;

    // ngOnChanges responses only to input properties
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}