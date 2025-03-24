package com.cost.controller;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cost.model.Cost;
import com.cost.service.CostService;



@RestController
@RequestMapping("/cost")
@CrossOrigin(origins = "http://localhost:3000/")
public class CostController {
	@Autowired
private CostService fservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Cost f)
	{
		String msg="DATA INSERETED";
		fservice.addData(f);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Cost>> getData()
	{
		List<Cost> flist=fservice.getData();
		return new ResponseEntity<List<Cost>>(flist,HttpStatus.OK);
	}
	@GetMapping("/fetch/{fid}")
	public ResponseEntity<Cost> getFoodidDetails(@PathVariable String fid)
	{
		Cost  f=fservice.getFoodidDetails(fid);
		return new ResponseEntity<Cost>(f,HttpStatus.OK);
	}
	@DeleteMapping("/del/{fid}")
	public ResponseEntity<String> deleteData(@PathVariable String fid)
	{
		String msg="COST ITEM DELETED";
		fservice.deleteData(fid);
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
		@PutMapping("/upd/{fid}")
	public ResponseEntity<String> updateData(@RequestBody Cost f,@PathVariable String fid)
	{
		String msg="";
		Cost  fs=fservice.getFoodidDetails(fid);
		if(fs!=null)
		{
			msg="COST ITEMS UPADTED SUCCESSFULLY";
			fservice.updateData(f,fid);
			return new ResponseEntity<String>(msg,HttpStatus.OK);
		}
		else
		{
			msg="UPDATION FAILED";
			return new ResponseEntity<String>(msg,HttpStatus.OK);
		}
	}
	}
