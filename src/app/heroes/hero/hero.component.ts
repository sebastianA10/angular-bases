import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name :string='Iron man';
  public age : number =42
  get capitalizeName():string{
    return this.name.toUpperCase(); 
  };
   getherodescription ():string{
    return ` ${this.name}-${this.age}`
  }

  changename ():void{

    this.name='spiderman'

  }

  changeage ():void{
    this.age=25  
  }

  reset ():void{
    this.name = 'Iron man';
    this.age=42;
  }


}
