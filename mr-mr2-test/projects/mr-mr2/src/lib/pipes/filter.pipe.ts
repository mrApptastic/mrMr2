import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {

  transform(text: any[], keyword: string): any {
    if (Array.isArray(text) && typeof keyword === "string") {
      return text.filter(c => {
        return Object.keys(c).some(key => {
          if (typeof c[key] === "string") {
            return c[key].toLowerCase().includes(keyword.toLowerCase());
          }
          return false;
        });
      });
    }
    return text;
  }

}
