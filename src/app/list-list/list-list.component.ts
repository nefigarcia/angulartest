import { Component } from '@angular/core';
import { Appointment, products } from '../models/appointment';
import {DataService} from '../servicio/data.service';
import { ContextService } from '../servicio/context.service';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.sass']
})
export class ListListComponent {
  appointTitle:string="";
  appointDate:Date=new Date();
  appointments: Appointment[]= [] 
  dataIsra: products[]=[];
  loading: boolean=true;

  constructor(private da: DataService,private context:ContextService){}

  ngOnInit(){
    this.readData()
  }

  addApoint(){
    console.log("func1")
    if(this.appointTitle.trim().length){
      let cita: Appointment={
        id:Date.now(),
        title: this.appointTitle,
        date: this.appointDate
      }
      this.appointments.push(cita)
      console.log(this.appointments)
      this.appointTitle=""
      this.appointDate=new Date();
    }
  }
  readData(){
    this.da.nextProd(this.callBackespera.bind(this));
  }
  callBackespera(param:boolean){
    if(param){
      this.loading=false;
      this.dataIsra=this.context.getDa();
    }
  }
}
