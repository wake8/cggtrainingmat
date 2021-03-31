package com.vunnam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vunnam.model.Customer;

@Repository
public interface MyJpaReo extends JpaRepository<Customer, String> {

}
