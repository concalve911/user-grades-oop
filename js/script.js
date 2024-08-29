"use strict";

"use strict";

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.log("This field is already complete");
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.log("This field is already complete");
    }
  }
  getAttendanceRate() {
    const totalClasses = this.attendance.filter((day) => day !== null).length;
    const attendanceRate = totalClasses
      ? this.attendance.filter((day) => day === true).length / totalClasses
      : 0;
    const averageGrade = this.getAverageGrade();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Good job";
    }
    if (averageGrade > 90 || attendanceRate > 0.9) {
      return "You can do better";
    }
    return "Try Again";
  }
}

const student1 = new Student("Andrew", "Black", 2000);
const student2 = new Student("Anthony", "Pettis", 1998);
const student3 = new Student("Mike", "Show", 1999);

student1.grades.push(95, 87, 92);
student2.grades.push(70, 65, 80);
student3.grades.push(100, 98, 99);

student1.present();
student1.present();
student1.absent();

student2.absent();
student2.present();
student2.absent();

student3.present();
student3.present();
student3.present();

console.log(
  `${student1.firstName} ${student1.lastName}: ${student1.getAttendanceRate()}`
);
console.log(
  `${student2.firstName} ${student2.lastName}: ${student2.getAttendanceRate()}`
);
console.log(
  `${student3.firstName} ${student3.lastName}: ${student3.getAttendanceRate()}`
);
