/* A shared service for handling js errors. */
import { Injectable, ErrorHandler } from "@angular/core";
import { DebugService } from "./debug.service";
import { ErrorLog } from "../models/error-log";

@Injectable({
  providedIn: "root"
})

export class ErrorService implements ErrorHandler {
  constructor(private debug: DebugService) { }
  /* Global method for handling ts errors. */
  handleError(error: any, method?: string, message?: string, body?: any) {
    if (error) {
      if (localStorage) {
        const log = localStorage.getItem("errorLog");
        if (log) {
          const extLog = JSON.parse(log) as Array<any>;
          extLog.push(this.generateErrorObject(error, method, message, body));
          localStorage.setItem("errorLog", JSON.stringify(extLog));
        } else {
          const newLog = new Array();
          newLog.push(this.generateErrorObject(error, method, message, body));
          localStorage.setItem("errorLog", JSON.stringify(newLog));
        }
      }
      this.debug.log(error);
    }
  }

  private generateErrorObject(error: any, method?: string, message?: string, body?: any): ErrorLog {
    const user = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");
    const server = sessionStorage.getItem("serverName");
    const nav = window.navigator;
    const log: ErrorLog = {
      User: user,
      Token: token,
      Server: server,
      Time : new Date(),
      Name: error?.name ? error.name : error,
      Message : message ? message : error.message ? error.message : error,
      Details : error,
      Status : error?.status ? error?.status : 0,
      StatusText : error?.statusText ? error.statusText : "",
      Url : error?.url ? error?.url : "",
      Body: body ? body : {},
      Method : method ? method.toUpperCase() : "",
      Page: window.location.href,
      WebBrowser : nav?.userAgent,
      Culture : nav?.language,
      CookiesEnabled : nav?.cookieEnabled,
      MaxTouchPoints : nav?.maxTouchPoints,
      Platform : nav?.platform
    };

    return log;
  }
 }
