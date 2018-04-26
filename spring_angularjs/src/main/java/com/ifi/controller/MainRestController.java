package com.ifi.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifi.models.CourseModel;
import com.ifi.models.StModel;
import com.ifi.models.Stcourse;
import com.ifi.repository.CourseRepo;
import com.ifi.repository.StudentRepo;

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
		@RequestMapping(value= "/add_student/")
		public void saveStudent(@RequestBody StModel student ) {
			studentRepo.save(student);		
		}
		
		@RequestMapping(value= "/edit_student/")
		public void editStudent(@RequestBody StModel student ) {
			studentRepo.save(student);		
		}

//		@GetMapping(value="/viewStudent/saveco")
//		public void addCotoSt(@RequestParam("courseid") int courseid,
//							@RequestParam("studentid") int studentid, HttpServletResponse response) throws IOException {
//			StModel stmodel;
//			stmodel=studentRepo.findById(studentid).orElse(null);
//			CourseModel coursemodels;
//			coursemodels=courseRepo.findById(courseid).orElse(null);
//			stmodel.getCoursemodels().add(coursemodels);
//			studentRepo.save(stmodel);
//			response.sendRedirect("http://localhost:8082/");
//		}
		@RequestMapping(value= "/add_course_student/")
		public void addCourseStudent(@RequestBody Stcourse stcourse ) {
			CourseModel course=courseRepo.findById(stcourse.getCourseid()).orElse(null);
			StModel stmodel =studentRepo.findById(stcourse.getStudentid()).orElse(null);
			stmodel.getCoursemodels().add(course);
			studentRepo.save(stmodel);
		}
		//course 
		@RequestMapping(value = "/getAllCourse")
		  public Iterable<CourseModel> retrieveAllCourses() {
			return courseRepo.findAll();
		}
		
		@RequestMapping(value = "/viewCourse/{courseid}")
		public CourseModel retrieveCourseById(@PathVariable("courseid") int courseid) {
			return	courseRepo.findById(courseid).orElse(null);
		}
}
