/*
  A shared service containing methods for sending messages to the client; i.e. alternative to the native alert function.
*/
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })

export class MessageService {

    constructor() {}

    success(body: string, title?: string): void {
        console.log(body, title);
    }

    warning(body: string, title?: string): void {
        console.log(body, title);
    }

    error(body: string, title?: string): void {
        console.log(body, title);
    }

    info(body: string, title?: string): void {
        console.log(body, title);
    }

    confirm(body: string, title?: string): Observable<boolean> {
        const ok = confirm(body);
        return of (ok);
    }
}
