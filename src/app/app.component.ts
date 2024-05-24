import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LIFE_CYCLE';

  changeValue() {
    let message = 'Mensaje Hola'
    this.title = message;
  }
}
