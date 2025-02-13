package com.weddingBooking.catering_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Catering {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_catering;
    private String name;
    private Double price;

    public Long getId_catering() {
        return id_catering;
    }

    public void setId_catering(Long id_catering) {
        this.id_catering = id_catering;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Catering() {
    }

    public Catering(Long id_catering, String name, Double price) {
        this.id_catering = id_catering;
        this.name = name;
        this.price = price;
    }
}
