import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template:"<div>Hello</div>",
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:any
  name:string;
  apclass:string;
  classCheck:boolean;
  constructor() {
    this.name = "Ramu";
    this.apclass="bi bi-airplane";
    this.classCheck = false;
    this.products = [{name:"Pencil",price:23,quanity:5},
    {name:"Pencil",price:23,quanity:5}];
   }
   sendMessage(cname:any){
    console.log(cname.value)
   }
   toggleClass(){
    if(this.classCheck)
    {
      this.apclass="bi bi-airplane";
    }
    else
      this.apclass="bi bi-airplane-fill";

    this.classCheck = !this.classCheck;

   }
   changeName(cname:string){
    alert(cname);
    this.name = cname;
   }
  ngOnInit(): void {
  }

}
