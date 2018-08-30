import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Car } from '../models/car.model';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {
  }
  private userUrl = 'http://localhost:8080';

  public createCar(car) {
    return this.http.post<Car>(this.userUrl, car);
  }
  public getAll(): Observable<any> {
    return this.http.get('//localhost:8080/all');
  }
}

