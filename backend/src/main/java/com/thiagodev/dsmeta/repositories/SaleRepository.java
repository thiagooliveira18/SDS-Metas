package com.thiagodev.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thiagodev.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}