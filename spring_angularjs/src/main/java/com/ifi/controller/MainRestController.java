package com.ifi.controller;

import java.io.IOException;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ifi.models.CourseModel;
import com.ifi.models.CourseRepo;
import com.ifi.models.StModel;
import com.ifi.models.StudentRepo;

@RestController
public class MainRestController {
	@Autowired
    private StudentRepo studentRepo;
	@Autowired
	private CourseRepo courseRepo;
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
		
//		@PostMapping(value= "/add_student")
//		public void saveSt(
//				@RequestParam(name="studentName") String studentName,
//				@RequestParam(name="studentAge") String studentAge,
//				@RequestParam(name="studentLocation") String studentLocation,HttpServletResponse response) throws IOException {
//			StModel stModel=new StModel();
//				stModel.setStudentName(studentName);
//				stModel.setStudentAge(studentAge);
//				stModel.setStudentLocation(studentLocation);
//			studentRepo.save(stModel);
//			response.sendRedirect("http://localhost:8082");
//			
//		}
		@RequestMapping(value= "/add_student/",produces = {MediaType.APPLICATION_JSON_VALUE})
		public void saveStudent2(@RequestBody StModel student ) {
			studentRepo.save(student);		
		}
		
		@PostMapping(value= "/edit_student2/")
		public void editStudent2(@RequestParam StModel student ) {
			studentRepo.save(student);
		}
		
		@GetMapping(value="/viewStudent/saveco")
		public void addCotoSt(@RequestParam("courseid") int courseid,
								   @RequestParam("studentid") int studentid, HttpServletResponse response) throws IOException {
			StModel stmodel;
			stmodel=studentRepo.findById(studentid).orElse(null);
			CourseModel coursemodels;
			coursemodels=courseRepo.findById(courseid).orElse(null);
			stmodel.getCoursemodels().add(coursemodels);
			studentRepo.save(stmodel);
			response.sendRedirect("http://localhost:8082/viewStudent");
		}
		
		//course 
		@RequestMapping(value = "/getAllCourse")
		  public Iterable<CourseModel> retrieveAllCourses() {
			return courseRepo.findAll();
		}
}
