package com.cost.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cost.model.Cost;
import com.cost.repository.CostRepository;

@Service
public class CostService {
	@Autowired
	private CostRepository frepo;
	public void addData(Cost f)
	{
		frepo.save(f);
	}
	public List<Cost> getData()
	{
		return frepo.findAll();
	}
	public Cost getFoodidDetails(String fid)
	{
		return frepo.findById(fid).orElse(null);
	}
    public void deleteData(String fid)
    {
    	Cost f=frepo.findById(fid).orElse(null);
    	if(f!=null)
    	{
    		frepo.delete(f);
    	}
    }
    public Cost updateData(Cost fs,String fid)
    {
    	
    	Cost f=frepo.findById(fid).orElse(null);
    	System.out.println(f);
    	if(f!=null)
    	{
    		//f.setFid(fid);
    		f.setFname(fs.getFname());
    		f.setPrice(fs.getPrice());
    		frepo.save(f);
    	}
    	System.out.println(f);
    	return f;
    }
}