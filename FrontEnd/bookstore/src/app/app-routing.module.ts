import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewByCategoryComponent } from './view-by-category/view-by-category.component';

const routes: Routes = [
  {path: 'books/:id', component: ViewBookComponent},
  {path: 'books', component: ViewAllBooksComponent},
  {path: 'categories/books/:category', component: ViewByCategoryComponent},
  {path: '', redirectTo: "books", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
