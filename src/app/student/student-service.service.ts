import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Payments } from './models/payments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl = `${environment.apiURL}/student/`;

  constructor(private http: HttpClient) { }

  getAllPayments(): Observable<Payments[]> {
    return this.http.get<Payments[]>(this.studentUrl);
  }

  
}
