import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  book = new Book();

  constructor(private bookService: BookService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails(){
    const id = this.activateRoute.snapshot.params[`id`];
    this.bookService.getBookById(id).subscribe(
      response => { 
        this.book = response;
        console.log(response)
      }
    );
  }

  goToViewAllBooks(){
    this.router.navigate([`books`]);
  }

}
