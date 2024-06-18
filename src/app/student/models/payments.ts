export class Payments {
    constructor(
        public payment_id?: string,
        public student_id?: string,
        public amount?: number,
        public status?: Status,
        public payment_date?: Date,
        public created_at?: Date,
        public updated_at?: Date
    ) {}
}

export enum Status {
    Paid = 1,
    Due = 2,
}
