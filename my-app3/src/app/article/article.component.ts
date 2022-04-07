import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  // vote: number = 0;
  // title: string = '';
  // link: string = '';


  // constructor() {
  //   this.title = 'Angular';
  //   this.vote = 8;
  //   this.link = 'https://angular.io/'
  // }
   
  //   voteUp(){
  //     this.vote +=1;
  //     return false;
  //   }
  //   voteDown(){
  //     this.vote -= 1;
  //     return false;
  //   }

  // ngOnInit(): void {
  // }


  //////////////////////////////Dopo aver creato il model

//   article!: Article;

//  constructor(){
// this.article = new Article('Angular', 'https://angular.io',8);
//  }

 
/////////////////////////Invio article come input partendo dal genitore

@Input() article!: Article;

 voteUp(): boolean{
   this.article.voteUp();
   return false;
 }
 voteDown(): boolean{
   this.article.voteDown();
   return false;
 }



  ngOnInit(): void {
     }

}
