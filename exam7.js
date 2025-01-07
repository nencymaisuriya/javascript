//1
// class school {
//    student(name, email, contactNumber) {
//         this.name = name;
//         this.email = email;
//         this.contactNumber = contactNumber;
//     }

//     printStudentDetails() {
//         console.log("Student Details:");
//         console.log(`Name: ${this.name}`);
//         console.log(`Email: ${this.email}`);
//         console.log(`Contact Number: ${this.contactNumber}`);
//     }

//     Faculty(name, email, contactNumber) {
//         this.name = name;
//         this.email = email;
//         this.contactNumber = contactNumber;
//     }

//     printFacultyDetails() {
//         console.log("Faculty Details:");
//         console.log(`Name: ${this.name}`);
//         console.log(`Email: ${this.email}`);
//         console.log(`Contact Number: ${this.contactNumber}`);
//     }
// }


// let school1 = new school();
// school1.student("Nency", "nm@gmail.com", "7874599916");
// school1.printStudentDetails();

// school1.Faculty("Girish Sir", "ghschool.com", "2436788432");
// school1.printFacultyDetails();

// ans:

// Student Details:
// Name: nency
// Email: nm@gmail.com
// Contact Number: 7874599916
// Faculty Details:
// Name: girish sir
// Email: ghschool.com
// Contact Number: 2436788432


  
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3
// class emp{
//     constructor(){
//         console.log("simple msg");
//     }
// }

// let obj=new emp()
// //ans:simple msg

//--------------------------------------------------------------------------------------------------------------------------------

//2
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     printDetails() {
//       console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
//   }
  
//   class Employee extends Person {
//     constructor(name, age, job, salary) {
//       super(name, age);
//       this.job = job;
//       this.salary = salary;
//     }
//     printAllDetails() {
//       super.printDetails();
//       console.log(`Job: ${this.job}, Salary: ${this.salary}`);
//     }
//   }
  
//   const employee1 = new Employee('nency', '23', 'full stack devloper','95000');
//   employee1.printAllDetails();

//   ans:
// Name: nency, Age: 23
// Job: full stack devloper, Salary: 95000

//----------------------------------------------------------------------------------------------------------------------------------------
  
//4 
// class Shape {
//     constructor() {
//     }

//   }
  
//   class Rectangle extends Shape {
//     constructor(width, height) {
//       super(); 
//       this.width = width;
//       this.height = height;
//     }
  
//     area() {
//       return this.width * this.height; 
//     }
//   }

//   const rectangle = new Rectangle(21,10);
//   console.log(`rectangle area: ${rectangle.area()}`);

// //   ans:
// //   rectangle area: 210
  
  
//   // circle
//   class Circle extends Shape {
//     constructor(radius) {
//       super(); 
//       this.radius = radius;
//     }
    
//     area() {
//       return 3.14 * this.radius * this.radius; 
//     }
//   }
  
//   const circle = new Circle(21);
//   console.log(`circle area: ${circle.area()}`);

// //   ans:
// //   circle area: 1384.74
//------------------------------------------------------------------
  