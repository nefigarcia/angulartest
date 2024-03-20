import { Injectable } from '@angular/core';
import { products } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  da:products[]=[];
  constructor() { }

  setDa(da:products[]){
    this.da=da;
  }
  getDa(){
    return this.da;
  }
}
