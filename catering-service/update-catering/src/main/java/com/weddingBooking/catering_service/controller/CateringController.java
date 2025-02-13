package com.weddingBooking.catering_service.controller;

import com.weddingBooking.catering_service.model.Catering;
import com.weddingBooking.catering_service.service.CateringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.ParameterResolutionDelegate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cateringU")
public class CateringController {

    @Autowired
    private CateringService cateringService;


    @PutMapping("/update/{id_catering}")
    public String updateCatering (@PathVariable Long id_catering,
                                @RequestBody Catering catering){
        cateringService.editCatering(id_catering, catering);
        return "Edit catering server successfully";
    }
}
