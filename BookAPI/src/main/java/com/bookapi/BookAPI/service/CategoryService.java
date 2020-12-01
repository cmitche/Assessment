package com.bookapi.BookAPI.service;

import com.bookapi.BookAPI.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bookapi.BookAPI.repos.CategoryRepo;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepo categoryRepo;

    public List<Category> getAllCategories(){
        List<Category> categories = new ArrayList<>();
        categoryRepo.findAll().forEach(categories::add);
        return categories;
    }

    public Optional<Category> getCategoryByName(String name){
        return categoryRepo.findCategoryByName(name);
    }

    public Category addCategory(Category category){
        return categoryRepo.save(category);
    }

    public Category updateCategoryByName(String name, Category category){
        category.setName(name);
        return categoryRepo.save(category);
    }

    public void deleteCategoryByName(String name){
        categoryRepo.deleteCategoryByName(name);
    }
}
