package com.demospringboot.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demospringboot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
 
    User findByName(String name);

}