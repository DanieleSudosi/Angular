import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app3-Prj';


  articles:Article[] = [
    
  ];

  constructor(){
    this.articles=[
      new Article('Angular', 'https://angular.io', 8),
      new Article('Java', 'https://oracle.org', 10),
      new Article('Bootstrap', 'https://getbootstrap.com', 10),
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log("Hai aggiunto " + title.value + ' ' + link.value);

    this.articles.push(new Article(title.value,link.value, 0))
    title.value ='';
    link.value ='';
    
    return false;
  }
}
