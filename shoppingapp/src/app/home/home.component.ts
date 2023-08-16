import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template:"<div>Hello</div>",
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string;
  apclass:string;
  classCheck:boolean;
  constructor() {
    this.name = "Ramu";
    this.apclass="bi bi-airplane";
    this.classCheck = false;
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
  ngOnInit(): void {
  }

}
