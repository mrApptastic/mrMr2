import { Component, Input, OnInit } from '@angular/core';
// import { captainCanvas } from "../../../assets/captainCanvas.js";
// import { mrToolBox } from "../../../assets/mrToolBox.js";
declare function captainCanvas(canvas, tools, settings): void;
declare function mrToolBox(id, settings): void;

@Component({
  selector: 'mr-captain-canvas',
  templateUrl: './captain-canvas.component.html',
  styleUrls: ['./captain-canvas.component.scss']
})
export class CaptainCanvasComponent implements OnInit {
  @Input() canvas?: string;
  @Input() toolBox?: string;
  @Input() settings?: string;
  cpt: any;
  tool: any;
  toolBoxId: string = "toolbBox-" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  constructor() { }

  ngOnInit(): void {
    if (!this.canvas) {
      this.canvas = "captainCanvas-" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    setTimeout(() => {
      if (!this.toolBox) {
        this.tool = new mrToolBox(this.toolBoxId, null);
      }
      this.cpt = new captainCanvas(this.canvas, (this.toolBox ? this.toolBox : this.toolBoxId), this.settings);

    }, 0);
  }

}
