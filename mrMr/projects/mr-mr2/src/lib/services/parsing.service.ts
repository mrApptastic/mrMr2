import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ParsingService {

  constructor() { }

  parseQueryVariable(variable: string): string {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (const q of vars) {
        const pair = q.split("=");
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
  }
}
