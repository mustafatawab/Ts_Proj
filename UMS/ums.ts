class Person{
    name: string
    age : number

    constructor(name : string , age : number){
        this.name = name;
        this.age = age;

    }

    getName(){
        return this.name;
    }


}




class Student extends Person {
    rollNumber : string;

    courses: Course[] = [];

    constructor(name : string , age : number , rollNumber : string){
        super(name , age);
        this.rollNumber = rollNumber;


    }

    registerForCourses(course: Course){
        this.courses.push(course)
    }
}




class Instructor extends Person{

    salary : number;
    courses : Course[] = [];
    
    constructor(name : string  , age : number ,salary : number){
        super(name , age);
        this.salary = salary;
    }
    
    assignCourses(...course : Course[]){

        this.courses.push(...course)

    }

}






class Course{
    id: string
    name: string
    students: Student[] = [];

    instructor!: Instructor

    constructor(id: string , name: string ){
        this.id  = id;
        this.name = name;


    }

    addStudent(student : Student){
        this.students.push(student);
        student.registerForCourses(this);
        
    }

    setInstructor(instructor : Instructor){
        this.instructor = instructor;
        instructor.assignCourses(this)
    }



}





class Department{
    name!: string;
    courses: Course[] = [];
    constructor(name: string){
        this.name = name
    }


    addCourse(...crs: Course[]){
        this.courses.push(...crs)
    }
}






const student1  = new Student("Saifullah " , 22 , "std1");
const  student2 = new Student("Mujahid Khan" , 47 , "std2");

const course1  = new Course("course1" , "metaverse")
const course2 = new Course("course1" , "Blockchain")

const instructor1 = new Instructor("Hamid Hissain" , 36 , 150000);
const instructor2 = new Instructor("Zia" , 62 , 5000000)

const dep1 = new Department("CS and IT")
dep1.addCourse(course1 , course2);

// // console.log(instructor1.name);
instructor1.assignCourses(course1 )
instructor1.assignCourses(course2)

// for(let i=0 ; i<instructor1.courses.length ; i++){
//     console.log(instructor1.courses[i]);
// }

course1.setInstructor(instructor1)
course2.setInstructor(instructor2)

course1.addStudent(student1);
course1.addStudent(student2)



console.log(dep1);









