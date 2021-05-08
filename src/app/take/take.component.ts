import { Model } from './../models/takequiz.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, pipe, Subscription } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  allOfMyData: Model[] = [];
  //@ts-ignore
  text: String;
  //@ts-ignore
  searchText: String;

  subs: Subscription[] =[];
  
  


  constructor( private http: HttpClient) { }

  ngOnInit(): void { 
   this.getAll();
  }

  getAll(){
    if(this.text==''){
      this.getAll();
    }
    return this.subs.push(this.http.get<any>('http://localhost:8080/quizzes').subscribe( quiz =>
      this.allOfMyData = quiz
    ));
    
  
  }
  //@ts-ignore
  getById(){
    if(this.text ===""){
      this.getAll();
    } else {
    return this.subs.push(this.http.get<any>('http://localhost:8080/quiz/' + this.text).subscribe( () =>
      this.allOfMyData = this.allOfMyData.filter(res => {
        return res._id?.toLocaleLowerCase().match(this.text.toLocaleLowerCase()) || res.Title?.toLocaleLowerCase().match(this.text.toLocaleLowerCase());
      })
    ));
    }
  }
  //@ts-ignore
  Search(){
    if(this.searchText ===""){
      this.getAll();
    } else {
    return this.subs.push(this.http.get<any>('http://localhost:8080/quizzes').subscribe( () =>
      this.allOfMyData = this.allOfMyData.filter(res => {
        return res.Title?.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      })
    ));
    }
  }

 
  
}
