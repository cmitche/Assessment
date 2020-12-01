import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {

  books: Book[];
  categories: Category[];
  filteredBooks: Book[] = [];
  

  constructor(private bookService: BookService, private categoryService: CategoryService) {
    this.filteredBooks = this.books;
   }

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllCategories();
  }

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }


  performFilter(filterBy: string){
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: Book) =>
      book.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getAllBooks(){
    this.bookService.getAllBooks().subscribe(
      response => {
        this.books = response;
        this.filteredBooks = this.books;
      }
    );
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      response => {
        console.log(response);
        this.categories = response;
      }
    )
  }

}
