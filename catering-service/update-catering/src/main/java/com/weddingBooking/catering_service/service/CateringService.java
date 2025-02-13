package com.weddingBooking.catering_service.service;

import com.weddingBooking.catering_service.model.Catering;
import com.weddingBooking.catering_service.repository.CateringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CateringService {

    @Autowired
    private CateringRepository cateringRepository;

    public void editCatering(Long id_catering, Catering updateCatering) {
        Catering existingCatering = cateringRepository.findById(id_catering)
                .orElseThrow(() -> new RuntimeException("Catering with ID " + id_catering + " not found."));
        existingCatering.setName(updateCatering.getName());
        existingCatering.setPrice(updateCatering.getPrice());
        cateringRepository.save(existingCatering);
    }

}
