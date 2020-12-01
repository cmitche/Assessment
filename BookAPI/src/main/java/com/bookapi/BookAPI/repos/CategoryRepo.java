package com.bookapi.BookAPI.repos;

import com.bookapi.BookAPI.models.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface CategoryRepo extends CrudRepository<Category, Long> {
    Optional<Category> findCategoryByName(String name);

    void deleteCategoryByName(String name);
}
