package com.ifi.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifi.models.CourseModel;
import com.ifi.models.StModel;
import com.ifi.models.StudentRepo;

@RestController
public class MainRestController {
	@Autowired
    private StudentRepo studentRepo;
		@RequestMapping(value = "/getAllStudent")
		public Iterable<StModel> retrieveAllStudents() {
			return studentRepo.findAll();
		}
		
		@RequestMapping(value = "/viewStudent/{studentid}")
		public StModel retrieveStudentById(@PathVariable("studentid") int studentid) {
			return	studentRepo.findById(studentid).orElse(null);
		}
		
		@RequestMapping(value = "/deleteStudent/{studentid}")
		public void deleteStudentById(@PathVariable("studentid") int studentid) {
			StModel stmodel=studentRepo.findById(studentid).orElse(null);
			studentRepo.delete(stmodel);
		}
		
		@RequestMapping(value = "/viewStudent2/{studentid}")
		public Set<CourseModel> retarieveStudentById(@PathVariable("studentid") int studentid) {
			StModel stmodel=studentRepo.findById(studentid).orElse(null);
			return stmodel.getCoursemodels();
		}
}
