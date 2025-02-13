package com.weddingBooking.catering_service.controller;

import com.weddingBooking.catering_service.model.Catering;
import com.weddingBooking.catering_service.service.CateringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CateringController {

    @Autowired
    private CateringService cateringService;

    @QueryMapping
    public List<Catering> getAllCatering() {
        return cateringService.getAllCatering();
    }

    @QueryMapping
    public Catering getCateringById(@Argument Long id_catering){
        return cateringService.getCateringById(id_catering);
    }

    @QueryMapping
    public List<Catering> searchCateringByName(@Argument String name) {
        return cateringService.searchCateringByName(name);
    }
}
