import { Component, Input, OnInit } from '@angular/core';
declare function rectAngular(elem, width, height, heading, colour, font): void;

@Component({
  selector: 'mr-rect-angular',
  templateUrl: './rect-angular.component.html',
  styleUrls: ['./rect-angular.component.scss']
})
export class RectAngularComponent implements OnInit {
  @Input() canvas?: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() heading?: number;
  @Input() colour?: string;
  @Input() font?: string;
  rect: any;
  constructor() { }

  ngOnInit(): void {
    if (!this.canvas) {
      this.canvas = "rectAngular-" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    setTimeout(() => {
      this.rect = new rectAngular(this.canvas, this.width, this.height, this.heading, this.colour, this.font);
    }, 0);
  }

}
