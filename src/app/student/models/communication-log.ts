export class CommunicationLog {
    constructor(
        public log_id?:string,
        public student_id?:string,
        public communication_date?:Date,
        public notes?:string
    )
    {}
}
