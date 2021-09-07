import { Input, Component, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    cropWidth: number = 75;

    @Output() onRatingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.onRatingClicked.emit(`You clicked ${this.rating}`);
    }

}