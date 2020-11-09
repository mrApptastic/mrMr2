import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ImageService {

  constructor() { }

  convertDataUrlToBlob(dataUrl: string): Blob {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], {type: mime});
  }

  dataURLtoFile(dataurl: string): File {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], "test.png", {type: mime});
  }

  generateImageToken(name: string): string {
    const token = new Date().getTime().toString();
    localStorage.setItem(name, token);
    return token;
  }

  fetchImageToken(name: string): string {
    return localStorage.getItem(name);
  }
}
