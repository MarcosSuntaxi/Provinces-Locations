package com.weddingBooking.catering_service.service;

import com.weddingBooking.catering_service.model.Catering;
import com.weddingBooking.catering_service.repository.CateringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CateringService {

    @Autowired
    private CateringRepository cateringRepository;

    public void saveCatering(Catering catering){cateringRepository.save(catering);}

}
