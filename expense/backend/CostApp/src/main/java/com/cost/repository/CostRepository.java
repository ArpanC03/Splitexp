package com.cost.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cost.model.Cost;
@Repository
public interface CostRepository extends JpaRepository<Cost,String> {

}
