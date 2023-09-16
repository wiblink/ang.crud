import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cars } from '../cars';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  carsForm:Cars = {
    id:0,
    name:'',
    quantity:0,
    price:0
  }
  constructor(private CarsService:CarsService,
    private router:Router){ }

  ngOnInit(): void {

  }

  create(){
    this.CarsService.create(this.carsForm)
    .subscribe({
      next:(data) => {
          this.router.navigate(["/cars/home"])
      },
      error:(error) => {
        console.log(error);
      }

    })
  }

}
