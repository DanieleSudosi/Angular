export class Article {
    title: string ='';
    link: string = '';
    vote: number = 0;


    constructor(title: string, link: string, vote:number){

        this.title = title;
        this.link = link;
        this.vote = vote ||0;
    }


    voteUp():void{
        this.vote +=1;
    }


    voteDown():void{
        this.vote -=1;
    }

    
}
