import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Patent } from "../models/patent.model";

@Injectable({
  providedIn: "root"
})
export class NasaService {
  apiKey: string = "";

  constructor(private http: HttpClient) {}

  public getPatent(): Observable<Patent> {
    this.apiKey = environment.NASA_KEY;
    const apodUrl = `https://api.nasa.gov/techtransfer/patent/?engine&&api_key=${
      this.apiKey
    }`;
    return this.http.get<Patent>(apodUrl);
  }
}
