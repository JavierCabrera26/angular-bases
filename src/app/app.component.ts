import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
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
