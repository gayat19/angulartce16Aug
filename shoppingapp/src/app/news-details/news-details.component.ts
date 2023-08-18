import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  authorname:string;
  constructor(private activatedRoute:ActivatedRoute) {
    this.authorname =this.activatedRoute.snapshot.params["aname"];
   }

  ngOnInit(): void {
  }

}
