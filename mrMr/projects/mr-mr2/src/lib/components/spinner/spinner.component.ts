import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mr-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: false
})
export class SpinnerComponent implements OnInit {
  @Input() image: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
