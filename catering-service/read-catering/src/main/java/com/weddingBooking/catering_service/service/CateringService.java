package com.weddingBooking.catering_service.service;

import com.weddingBooking.catering_service.model.Catering;
import com.weddingBooking.catering_service.repository.CateringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CateringService {

    @Autowired
    private CateringRepository cateringRepository;

    public List<Catering> getAllCatering() {
        return cateringRepository.findAll();
    }

    public Catering getCateringById(Long id_catering){
        return cateringRepository.findById(id_catering).orElse(null);
    }

    public List<Catering> searchCateringByName(String name) {
        return cateringRepository.findByName(name);
    }

}
