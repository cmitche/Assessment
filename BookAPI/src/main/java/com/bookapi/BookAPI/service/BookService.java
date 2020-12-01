package com.bookapi.BookAPI.service;

import com.bookapi.BookAPI.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bookapi.BookAPI.repos.BookRepo;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    BookRepo bookRepo;

    public List<Book> getAllBooks(){
        List<Book> listOfBooks = new ArrayList<>();
        bookRepo.findAll().forEach(listOfBooks::add);
        return listOfBooks;
    }

    public List<Book> getBooksByCategory(String category){
        return bookRepo.findBooksByCategory(category);
    }

    public Optional<Book> getBookById(Long id){
        return bookRepo.findById(id);
    }

    public Book addBook(Book book){
        return bookRepo.save(book);
    }

    public Book updateBookById(Long id, Book book){
        book.setId(id);
        return bookRepo.save(book);
    }

    public void deleteBookById(Long id){
       bookRepo.deleteById(id);
    }
}
