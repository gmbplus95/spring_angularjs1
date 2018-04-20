package com.ifi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifi.models.StModel;
import com.ifi.models.StudentRepo;

@RestController
public class MainRestController {
	@Autowired
    private StudentRepo studentRepo;
		@RequestMapping(value = "/getAllStudent")
		public List<StModel> retrieveAllStudents() {
			return studentRepo.findAll();
		}
		
		
}
