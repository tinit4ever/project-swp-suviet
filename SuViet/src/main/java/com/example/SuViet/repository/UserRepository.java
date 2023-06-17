package com.example.SuViet.repository;

import com.example.SuViet.model.Role;
import com.example.SuViet.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByMail(String email);
    Optional<User> findByMailAndEnabled(String email, boolean isEnabled);
    Optional<User> findByMailAndPassword(String mail, String password);
    boolean existsByMail(String mail);

    @Query("SELECT u FROM User u WHERE u.verificationCode like ?1")
    User findByVerificationCode(String code);

}
