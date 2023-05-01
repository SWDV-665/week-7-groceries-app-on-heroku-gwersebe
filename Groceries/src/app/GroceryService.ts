import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grocery } from './grocery.model';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private baseUrl = 'http://localhost:3000/groceries';

  constructor(private http: HttpClient) {}

  getAllGroceries(): Observable<Grocery[]> {
    return this.http.get<Grocery[]>(this.baseUrl);
  }

  getGroceryById(id: string): Observable<Grocery> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Grocery>(url);
  }

  addGrocery(grocery: Grocery): Observable<Grocery> {
    return this.http.post<Grocery>(this.baseUrl, grocery);
  }

  updateGrocery(id: string, grocery: Grocery): Observable<Grocery> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Grocery>(url, grocery);
  }

  deleteGrocery(id: string): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
