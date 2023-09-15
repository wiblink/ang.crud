import { Component } from '@angular/core';
import { Cars } from '../cars';
import { CarsService } from '../cars.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCars:Cars[] = [];
  constructor(private CarsService:CarsService) { }

  ngOnInit(): void{
    this.get();
  }

  get(){
    this.CarsService.get()
    .subscribe((data) => {
      this.allCars = data;
    })
  }

}
