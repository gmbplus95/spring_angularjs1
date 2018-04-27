package com.ifi.models;
//tạo class lấy id của student và course
public class Stcourse {
			private int studentid;
			private int courseid;
			private int sizes;
			public Stcourse(int studentid, int courseid, int sizes) {
				super();
				this.studentid = studentid;
				this.courseid = courseid;
				this.sizes = sizes;
			}
			public int getSizes() {
				return sizes;
			}
			public void setSizes(int sizes) {
				this.sizes = sizes;
			}
			public int getStudentid() {
				return studentid;
			}
			public void setStudentid(int studentid) {
				this.studentid = studentid;
			}
			public int getCourseid() {
				return courseid;
			}
			public void setCourseid(int courseid) {
				this.courseid = courseid;
			}
			public Stcourse(int studentid, int courseid) {
				super();
				this.studentid = studentid;
				this.courseid = courseid;
			}
			public Stcourse() {
				super();
			}
			
}
