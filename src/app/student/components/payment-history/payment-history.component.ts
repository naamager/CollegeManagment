import { Component, OnInit } from '@angular/core';
import { Payments, Status } from '../../models/payments';
import { StudentService } from '../../student-service.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  payments: Payments[] = [
    new Payments('1', '123', 200, Status.Paid, new Date('2023-01-01'), new Date('2023-01-01'), new Date('2023-01-01')),
    new Payments('2', '124', 300, Status.Due, new Date('2023-02-01'), new Date('2023-02-01'), new Date('2023-02-01')),
    new Payments('3', '125', 250, Status.Paid, new Date('2023-03-01'), new Date('2023-03-01'), new Date('2023-03-01'))
  ];
  //payments: Payments[] = []
  constructor(private studentService: StudentService) {
  }
  ngOnInit(): void {
    //this.studentService.getAllPayments().subscribe(x => this.payments = x);
  }



  getStatusLabel(status: Status | undefined): string {
    return status === Status.Paid ? 'Paid' : 'Due';
  }

}
