package com.example.demo.repositories.PokeBook;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.PokeBook.PokeBook;

@Repository
public interface PokeBookRepository extends CrudRepository<PokeBook, Long> {
    // TODO implement this repo
    List<PokeBook> findAll();
    
}
