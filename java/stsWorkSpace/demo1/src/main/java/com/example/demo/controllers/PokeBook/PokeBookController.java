package com.example.demo.controllers.PokeBook;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.models.PokeBook.PokeBook;
import com.example.demo.services.PokeBookService;

@Controller
@RequestMapping("/expenses")
public class PokeBookController {
    private final PokeBookService pokeBookService;

    public PokeBookController(PokeBookService pokeBookService) {
        this.pokeBookService = pokeBookService;
    }

    @GetMapping
    public String index(@ModelAttribute("pokeBook") PokeBook pokeBook, Model model) {
        List<PokeBook> pokeBooksList = pokeBookService.allPokeBooks();
        if (!pokeBooksList.isEmpty()) {
            model.addAttribute("pokeBooksList", pokeBooksList);
        }
        return "PokeBook/expenses.jsp";
    }

    @PostMapping("")
    public String create(@Valid @ModelAttribute("pokeBook") PokeBook pokeBook, BindingResult result,
            Model model) {
        // TODO: process POST request
        List<PokeBook> pokeBooksList = pokeBookService.allPokeBooks();
        if (!pokeBooksList.isEmpty()) {
            model.addAttribute("pokeBooksList", pokeBooksList);
        }
        if (result.hasErrors()) {

            return "PokeBook/expenses.jsp";
        }
        pokeBookService.createPokeBook(pokeBook);
        return "redirect:/expenses";
    }

}
