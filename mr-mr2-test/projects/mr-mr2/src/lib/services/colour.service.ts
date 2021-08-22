import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  constructor() { }

  modifyColor(color: string, percent: number): string {
    const rgb = this.getColorRGB(color);
    const r = parseInt(rgb.split("(")[1].split(",")[0], 10);
    const g = parseInt(rgb.split(",")[1].split(",")[0], 10);
    const b = parseInt(rgb.split(",")[2].split(")")[0], 10);
    const hex = this.rgbToHex(r, g, b);
    const uha = this.changeBrightness(hex, percent);
    return uha;
  }

  getColorRGB(color: string): string {
    const d = document.createElement("div");
    d.style.color = color;
    document.body.appendChild(d);
    // Color in RGB
    const c = window.getComputedStyle(d).color;
    document.body.removeChild(d);
    return c;
  }

  rgbToHex(r: number, g: number, b: number): string {
    // tslint:disable-next-line: no-bitwise
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  changeBrightness(hex: string, percent: number): string {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, "");

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, "$1$1");
    }

    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // tslint:disable-next-line: no-bitwise
    let rHex = ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substr(1);
    // tslint:disable-next-line: no-bitwise
    let gHex = ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substr(1);
    // tslint:disable-next-line: no-bitwise
    let bHex = ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substr(1);

    if (rHex.length === 1) {
      rHex = "0" + rHex;
    }

    if (gHex.length === 1) {
      gHex = "0" + gHex;
    }

    if (bHex.length === 1) {
      bHex = "0" + bHex;
    }

    return "#" +
       rHex +
       gHex +
       bHex;
  }

}




