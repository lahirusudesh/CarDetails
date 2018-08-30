import { Component} from '@angular/core';
import { Car } from '../shared/models/car.model';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car: Car = new Car();

  constructor(private carService: CarService) { }
  createCar(): void {
    this.carService.createCar(this.car)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
