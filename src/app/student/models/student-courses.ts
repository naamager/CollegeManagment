export class StudentCourses {
    constructor(
        public studentCourse_id?: string,
        public student_id?: string,
        public course_id?: string,
        public enrollment_date?: string,
        public status?: Status,
        public participation_score?: number,
        public created_at?: Date
    ) {}
}

export enum Status {
    Enrolled = 1,
    Completed = 2,
    Dropped = 3
}
