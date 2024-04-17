import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroname:string[]=['spideman','ironman','batman','super man']
  public deletedhero? :string='';
  removelastheroe():void{
    this.deletedhero=this.heroname.pop();
    
  }

}
