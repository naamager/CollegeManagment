import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { OptionsComponent } from './components/options/options.component';
import { DetailsComponent } from './components/details/details.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    SearchComponent,
    OptionsComponent,
    DetailsComponent,
    PaymentHistoryComponent,
    AttendanceComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PaymentHistoryComponent,
    OptionsComponent
  ],

})
export class StudentModule { }
