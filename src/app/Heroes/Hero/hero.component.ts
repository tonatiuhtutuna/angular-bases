import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {


  public name:string ="ironman";
  public age: number = 45;

  get capitalizedName():string{

    return this.name.toUpperCase();
  };

  getHeroDescription():string{
    return `${ this.name} - ${this.age}`;
  }

  changehero():void{
    this.name = 'Spiderman';
  }

  changeage():void{
    this.age = 23;
  }

  resetform():void{
    this.name = 'ironamn';
    this.age = 45;
    /*document.querySelectorAll('h1')!.forEach( element =>{
      element.innerHTML = '<h1>Desde Angular</h1>'
    });*/
  }
}



