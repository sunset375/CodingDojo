package com.kim.dojosAndNinjas.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kim.dojosAndNinjas.models.Dojo;
import com.kim.dojosAndNinjas.models.Ninja;
import com.kim.dojosAndNinjas.repositories.DojoRepository;
import com.kim.dojosAndNinjas.repositories.NinjaRepository;

@Service
public class AppService {
	//need to tell service about the repositories
	private final DojoRepository dojoRepo;
	
	private final NinjaRepository ninjaRepo;
	
	public AppService(DojoRepository dojoRepo, NinjaRepository ninjaRepo) {
		this.dojoRepo = dojoRepo;
		this.ninjaRepo = ninjaRepo;
	}
	
	//get all dojos
	public List<Dojo> findAllDojos() {
		return this.dojoRepo.findAll();		
	}
	
	
	public Dojo addDojo(Dojo dojo) {
		return this.dojoRepo.save(dojo);
	}
	
	
	public Ninja addNinja(Ninja ninja) {
		return this.ninjaRepo.save(ninja);
	}
	
	public Dojo getDojoId(Long id) {
		return this.dojoRepo.findById(id).orElse(null);
	}
}
