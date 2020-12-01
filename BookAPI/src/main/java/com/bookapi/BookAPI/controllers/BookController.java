package com.bookapi.BookAPI.controllers;

import com.bookapi.BookAPI.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.bookapi.BookAPI.service.BookService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookController {
    @Autowired
    BookService bookService;

    @RequestMapping(method = RequestMethod.GET, value = "/books")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/categories/books/{category}")
    public List<Book> getBooksByCategory(@PathVariable String category){
        return bookService.getBooksByCategory(category);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/books/{id}")
    public Optional<Book> getBookById(@PathVariable Long id){
        return bookService.getBookById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public Book addBook(@RequestBody Book book){
        return bookService.addBook(book);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/books/{id}")
    public Book updateBookById(@PathVariable Long id, @RequestBody Book book){
        return bookService.updateBookById(id, book);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/books/{id}")
    public void deleteBookById(@PathVariable Long id){
        bookService.deleteBookById(id);
    }
}
