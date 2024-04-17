import { Component, } from "@angular/core"
@Component({
  selector: 'app-counter',
  template: `
    <p>pinche contado alv :{{ counter }}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <br />
    <button (click)="reset(0)">reset</button>

    <hr />
  `,
})
export class countercomponent {
  
  public counter = 0;

  increaseBy(value: number): void {
    this.counter += value;
  };

  reset(value: number): void {
    this.counter = value;
  };
};

