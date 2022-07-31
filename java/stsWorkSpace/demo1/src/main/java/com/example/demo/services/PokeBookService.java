package com.example.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.models.PokeBook.PokeBook;
import com.example.demo.repositories.PokeBook.PokeBookRepository;

@Service
public class PokeBookService {
    private final PokeBookRepository pokeBookRepository;

    public PokeBookService(PokeBookRepository pokeBookRepository) {
        this.pokeBookRepository = pokeBookRepository;
    }

    public List<PokeBook> allPokeBooks() {
        return pokeBookRepository.findAll();
    }

    public PokeBook createPokeBook(PokeBook pokeBook) {
        return pokeBookRepository.save(pokeBook);
    }

}
