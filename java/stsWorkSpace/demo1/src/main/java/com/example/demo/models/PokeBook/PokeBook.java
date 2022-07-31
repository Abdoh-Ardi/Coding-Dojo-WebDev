package com.example.demo.models.PokeBook;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "poke_books")
public class PokeBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull(message = "Expense Name Must Not Be Empty")
    @NotEmpty(message = "Expense Name Must Not Be Empty")
    private String name;
    @NotNull(message = "Vendor Name Must Not Be Empty")
    @NotEmpty(message = "Vendor Name Must Not Be Empty")
    private String vendor;
    //FIXME TOKNOW:Primitive cant be null
    @NotNull(message = "Amount Must Not Be Empty")
    @Min(1)
    private Double amount;
    @NotNull(message = "Description Must Not Be Empty")
    @NotEmpty(message = "Description Must Not Be Empty")
    private String description;
    // This will not allow the createdAt column to be updated after creation
    @Column(updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;

    
    public PokeBook() {
    }

    public PokeBook(String name, String vendor, Double amount,
            String description) {
        this.name = name;
        this.vendor = vendor;
        this.amount = amount;
        this.description = description;
    }
    


    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

}
