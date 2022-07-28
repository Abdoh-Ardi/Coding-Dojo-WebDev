package com.example.demo.controllers.RenderingBooks;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.models.Book;
import com.example.demo.repositories.BookRepository;
import com.example.demo.services.BookService;

@Controller
@RequestMapping("books")
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping
    public String index(Model model) {
        //TOKNOW: if named books it will not work conflict with page url possibly
        List<Book> bookList= bookService.allBooks();
        if (!bookList.isEmpty()) {
            model.addAttribute(bookList);
        }
        return "RenderingBooks/index.jsp";
    }
    @GetMapping(value = "/{bookID}")
    public String showBookDetails(@PathVariable("bookID") long id, Model model) {
        Book book = bookService.findBook(id);
        if (book != null) {
            model.addAttribute(book);
        }
        return "RenderingBooks/show.jsp";
    }

}
