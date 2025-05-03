export class CourseSchedule{
    course: string;
      instructor: string;
      sectionNumber: number;
      capacity: string;
      timeSlot: number;
      campus: string;
    
      constructor(course: string, instructor: string, sectionNumber: number, capacity: string, timeSlot: number, campus: string){
        this.course = course;
        this.instructor = instructor;
        this.sectionNumber = sectionNumber; 
        this.capacity = capacity;
        this.timeSlot = 0;
        this.campus = campus;
      }
    }