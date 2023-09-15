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
}
