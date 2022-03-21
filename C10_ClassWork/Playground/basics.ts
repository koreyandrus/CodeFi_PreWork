class Student {
    constructor(
        public firstName: string, 
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}


const student1 = new Student('Korey', 'Andrus', 36, ['Angular']);
student1.enroll('React');
console.log(student1.listCourses);