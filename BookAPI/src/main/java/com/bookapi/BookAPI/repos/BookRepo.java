package com.bookapi.BookAPI.repos;

import com.bookapi.BookAPI.models.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface BookRepo extends CrudRepository<Book, Long> {
    List<Book> findBooksByCategory(String category);
}
