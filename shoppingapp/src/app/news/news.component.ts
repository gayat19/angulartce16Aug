import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../models/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
newsData:News[];
  constructor(private newsService:NewsService,
         private route:Router ) 
          { 
    this.newsData = [];
    this.newsService.getNews().subscribe((data:any)=>{
      this.newsData = data.articles as News[];
      //console.log(this.newsData)
    })
    
  }
  read(author:any){
    //alert(author)
    this.route.navigate(['ndetails',author]);
  }
  ngOnInit(): void {
  }

}
