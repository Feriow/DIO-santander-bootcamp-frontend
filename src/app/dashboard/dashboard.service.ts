import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly baseUrl =
    'http://bootcamp-dio-santander-week.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) {}

  async getStocks(): Promise<Stock[]> {
    const url = `${this.baseUrl}/stock`;
    return this.http.get<Stock[]>(url).toPromise();
  }
}
