import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any>{
    return this.http.get(this.url + `/books/categories`);
  }

  getCategoryByName(name: string): Observable<any>{
    return this.http.get(this.url + `/books/categories/${name}`)
  }

  addCategory(category: Category): Observable<any>{
    return this.http.post(this.url + `/books/categories`, category);
  }

  updateCategoryByName(name: string, category: Category): Observable<any>{
    return this.http.put(this.url + `/books/categories/${name}`, category);
  }

  deleteCategoryByName(name: string): Observable<any>{
    return this.http.delete(this.url + `/books/categories/${name}`)
  }
}
