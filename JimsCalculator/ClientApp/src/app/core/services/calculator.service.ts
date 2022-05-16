import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    constructor(private http: HttpClient){
      
    }

    calculate(payload: any){
        return this.http.post(`${ environment.apiUrl }calculator/calculate`, payload);
    }
}
