import { Component } from '@angular/core';
import { Cars } from '../cars';
import { CarsService } from '../cars.service';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCars:Cars[] = [];
  constructor(private CarsService:CarsService) { }

  deleteModal: any;
  idToDelete: number = 0;
  ngOnInit(): void{
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );

    this.get();
  }

  get(){
    this.CarsService.get()
    .subscribe((data) => {
      this.allCars = data;
    })
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  delete(){
    this.CarsService.delete(this.idToDelete)
    .subscribe((data) => {
      this.allCars = this.allCars.filter(_ => _.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }

}
