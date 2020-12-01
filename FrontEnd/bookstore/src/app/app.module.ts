import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewByCategoryComponent } from './view-by-category/view-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBookComponent,
    ViewAllBooksComponent,
    ViewByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
