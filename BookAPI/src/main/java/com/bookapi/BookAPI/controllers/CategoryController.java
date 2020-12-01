package com.bookapi.BookAPI.controllers;

import com.bookapi.BookAPI.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.bookapi.BookAPI.service.CategoryService;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @RequestMapping(method = RequestMethod.GET, value = "/books/categories")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/books/categories/{name}")
    public Optional<Category> getCategory(@PathVariable String name){
        return categoryService.getCategoryByName(name);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books/categories")
    public Category addCategory(@RequestBody Category category){
        return categoryService.addCategory(category);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/books/categories/{name}")
    public Category updateCategoryByName(@PathVariable String name, @RequestBody Category category){
        return categoryService.updateCategoryByName(name, category);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/books/categories/{name}")
    public void deleteCategoryByName(@PathVariable String name){
        categoryService.deleteCategoryByName(name);
    }
}
