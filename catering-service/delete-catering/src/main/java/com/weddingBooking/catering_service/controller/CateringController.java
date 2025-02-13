package com.weddingBooking.catering_service.controller;

import com.weddingBooking.catering_service.model.Catering;
import com.weddingBooking.catering_service.service.CateringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.ParameterResolutionDelegate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cateringD")
public class CateringController {

    @Autowired
    private CateringService cateringService;
    @DeleteMapping("/delete/{id_catering}")
    private String deleteCatering(@PathVariable Long id_catering){
        cateringService.deleteCatering(id_catering);
        return "Delete Catering service successfully";
    }
}
