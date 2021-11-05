import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

enum Endpoint {
  productAccount = "test/db",
}

@Injectable({
  providedIn: 'root'
})
export class CustomerProductAccountService {

  private readonly URL_HOST: string = environment.clientesProductosApiUrl;
  constructor(private http: HttpClient) { }

  public productAccountCustomer(): Observable<any> {
    return this.http.get(this.URL_HOST + Endpoint.productAccount);
  }
}
