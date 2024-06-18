import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Status, Student } from '../../models/student-model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent  {

  // @Input() students: Student[] | undefined;


   students: Student[] =
    [
    {
        student_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        status: Status.current,
        created_at: new Date('2023-01-01'),
        updated_at: new Date('2023-06-01')
    },
    {
        student_id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        status: Status.potential,
        created_at: new Date('2023-02-15'),
        updated_at: new Date('2023-05-30')
    },
    // ניתן להוסיף עוד סטודנטים לפי הצורך
];

  constructor(private router: Router) {}


  viewDetails(student: Student) {
    this.router.navigate(['/details', student]);
  }



}
