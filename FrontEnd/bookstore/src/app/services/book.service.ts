import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any>{
    return this.http.get(this.url + `/books`);
  }

  getBookByCategory(category: string): Observable<any>{
    return this.http.get(this.url + `/categories/books/${category}`)
  }

  getBookById(id: number): Observable<any>{
    return this.http.get(this.url + `/books/${id}`)
  }

  addBook(book: Book): Observable<any>{
    return this.http.post(this.url + `/books`, book);
  }

  updateBookById(id: number, book: Book): Observable<any>{
    return this.http.put(this.url + `/books/${id}`, book);
  }

  deleteBookById(id: number): Observable<any>{
    return this.http.delete(this.url + `/books/${id}`)
  }
}
