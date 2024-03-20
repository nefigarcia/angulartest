import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ContextService } from './context.service';
import { products } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  num:products[]=[] 

 private urlApi= "https://dummyjson.com/products"
  constructor(private http:HttpClient, private context:ContextService) { }

  nextProd(callBackespera:(st:boolean)=>void){
    /***         Aqui cambie de tipo a any para obtener el value array del element products*/
    this.http.get<any>(this.urlApi, {observe:'response'})
    .subscribe((result)=>{
      console.log("data", result.body.products);
      this.num=result.body.products || [];


      console.log("arr",this.num)
      this.context.setDa(this.num)
      callBackespera(true);
    })
  }
}
