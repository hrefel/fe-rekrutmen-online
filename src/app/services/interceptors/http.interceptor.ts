import {
  HttpEvent, HttpHandler, HttpInterceptor,
  HttpParams, HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ng2IzitoastService } from "ng2-izitoast";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";



@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  URLNotToUse: Array<string>;
  listOfURLJava: Array<string>;

  constructor(
    private cookie: CookieService,
    private toastr: Ng2IzitoastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.cookie.get("token");
    this.URLNotToUse = ["http://www.geoplugin.net/json.gp", "http://172.16.111.45:3000/api", "http://localhost:3000/api"];
    this.listOfURLJava = ["service/master", "service/transaksi"];
    const param = new HttpParams();

    if (token && this.isValidRequestURL(request.url)) {
      request = request.clone({

        headers: this.isValidRequestURL(request.url)
          ? request.headers.set("Authorization", token)
          : null,
        
        // params: this.isValidRequestURLHeader(request.url)
        //   ? param.set("X-AUTH-TOKEN", token)
        //   : null,
      });

      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          
          if (event instanceof HttpResponse) {
            
            if (event.status === 201) {
              let message = event.body.message
                ? event.body.message
                : "Data Berhasil Disimpan";
              this.toastr.success({
                title: message,
                position: "topRight",
              });
            }
          }
          
          return event;
        })
      );
    }

    return next.handle(request);
  }

  private isValidRequestURL(requestURL: string): boolean {
    // let positionIndicator: string =

    for (let address of this.URLNotToUse) {
      if (new RegExp(address).test(requestURL)) return false;
    }
    return true;
  }

  private isValidRequestURLHeader(requestURL: string): boolean {
    for (let address of this.listOfURLJava) {
      if (new RegExp(address).test(requestURL)) return false;
    }
    return true;
  }
}
