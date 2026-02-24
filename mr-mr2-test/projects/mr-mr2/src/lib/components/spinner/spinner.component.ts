import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mr-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() image: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
