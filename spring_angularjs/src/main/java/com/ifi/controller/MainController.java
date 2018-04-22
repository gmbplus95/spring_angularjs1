package com.ifi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ifi.models.StModel;
import com.ifi.models.StudentRepo;

@Controller
public class MainController {
	@Autowired
	StudentRepo studentRepo;
	@RequestMapping("/index")
	public String welcome() {
		return "index.html";
	}
	
	@RequestMapping("/add_student")
		public String addStundent(){
			return "add_student.html";
		}
//	@GetMapping(value="/viewStudent/{studentid}")
//	public String viewSt(@PathVariable("studentid") int studentid){
//		StModel stmodel=studentRepo.findById(studentid).orElse(null);
//		return "view_Student.html";
//	}
	@RequestMapping("/viewStudent")
	public String addStunsdent(){
		return "view_Student.html";
	}
	
}
