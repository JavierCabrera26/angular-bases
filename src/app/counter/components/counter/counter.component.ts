import { Component, isStandalone } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }} </h3>

    <button (click)="increasedBy(5)">+</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreasedBy(2)">-</button>
  `,
  standalone: false,
})
export class CounterComponent {
  public title = 'Hola Mundo';
  public counter: number = 10;

  increasedBy( value: number ): void {
    this.counter += value;
  }

  decreasedBy( value: number): void {
    this.counter -= value;
  }

  reset (): void {
    this.counter = 10;
  }
}
