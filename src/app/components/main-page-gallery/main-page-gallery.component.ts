import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-gallery',
  templateUrl: './main-page-gallery.component.html',
  styleUrls: ['./main-page-gallery.component.scss']
})
export class MainPageGalleryComponent implements OnInit {

  @Input() images!: string[];
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }

}
