import { Component } from '@angular/core';
import { Cars } from '../cars';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  carsForm: Cars = {
    id:0,
    name:'',
    quantity:0,
    price:0
  }

  constructor(private CarsService:CarsService,
    private route:ActivatedRoute,
    private router:Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    })
  }

  getById(id:number){
      this.CarsService.getById(id)
      .subscribe((data) => {
        this.carsForm = data
      })

  }

  update(){
    this.CarsService.update(this.carsForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/cars/home"]);
      },
      error:(error)=> {
          console.log(error);
      }
    })
  }

}
