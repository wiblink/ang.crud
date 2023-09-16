import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from './cars';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Cars[]>("http://localhost:3000/cars")
  }

  create(payload:Cars){
    return this.http.post<Cars>("http://localhost:3000/cars",payload);
  }

  getById(id:number){
    return this.http.get<Cars>(`http://localhost:3000/cars/${id}`)
  }

  update(payload:Cars){
    return this.http.put(`http://localhost:3000/cars/${payload.id}`, payload)
  }

  delete(id:number){
    return this.http.delete<Cars>(`http://localhost:3000/cars/${id}`)
  }
}
