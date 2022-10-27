import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-page-cards',
  templateUrl: './main-page-cards.component.html',
  styleUrls: ['./main-page-cards.component.scss']
})
export class MainPageCardsComponent implements OnInit {


  @Input() width = '100%';
  @Input() item!: {
    id: number;
    title: string;
    imgPath: string;
    date: string;
  };
  @Output() imageClick = new EventEmitter<string>();
  @Output() bookClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onImageClick() {
    this.imageClick.emit(this.item.title);
  }
  onBookClick() {
    this.bookClick.emit(this.item.id);
  }

}
