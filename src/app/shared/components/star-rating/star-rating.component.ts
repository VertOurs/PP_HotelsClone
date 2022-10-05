import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StartRatingComponent implements OnChanges {
  public starWidth: number = 0;

  @Input()
  public rating: number = 2;

  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(){
    this.starWidth = this.rating * 125 /5;
  }

  public sendRating(): void {
    this.starRatingClicked.emit(`la note est de ${this.rating}`);
  }
}
