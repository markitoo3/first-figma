import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit();
  }

}
