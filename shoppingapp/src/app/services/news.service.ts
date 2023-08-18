import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class NewsService{
    constructor(private http:HttpClient){

    }
    getNews():any{
        return this.http.get("https://newsapi.org/v2/everything?q=food&apiKey=d0c8da8f5a87412ebf650b04156f071c")
    }
}