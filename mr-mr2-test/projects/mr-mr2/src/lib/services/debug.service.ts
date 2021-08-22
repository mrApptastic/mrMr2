import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DebugService {

  constructor() { }

  log(obj: any, styles?: string): void {
    if (!!sessionStorage.getItem("isDevMode")) {
      if (styles) {
        console.log("%c" + obj.toString(), styles);
      } else {
        console.log(obj);
      }
    }
  }
}
