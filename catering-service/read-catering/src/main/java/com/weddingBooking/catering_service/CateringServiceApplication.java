package com.weddingBooking.catering_service;

import com.weddingBooking.catering_service.repository.CateringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CateringServiceApplication{

	@Autowired
	private CateringRepository cateringRepository;

	public static void main(String[] args){

		SpringApplication.run(CateringServiceApplication.class, args);

		
	}
}
