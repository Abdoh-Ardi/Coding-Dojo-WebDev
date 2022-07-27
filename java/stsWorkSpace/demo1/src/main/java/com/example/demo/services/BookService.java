package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import java.util.function.BiConsumer;

import javax.validation.constraints.Null;

import org.springframework.stereotype.Service;
// import com.codingdojo.mvc.models.Book;

import com.example.demo.models.Book;
import com.example.demo.repositories.BookRepository;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }

    
    public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
        Book book = findBook(id);
        if (book != null) {
            book.setTitle(title);
            book.setDescription(desc);
            book.setLanguage(lang);
            book.setNumberOfPages(numOfPages);
            createBook(book);
            return book;
        }
        return null;
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }

}