package com.weddingBooking.catering_service.repository;

import com.weddingBooking.catering_service.model.Catering;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CateringRepository extends JpaRepository<Catering, Long> {
    List<Catering> findByName(String name);
}
