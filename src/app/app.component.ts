import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PicOfDayComponent } from './pic-of-day/pic-of-day.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PicOfDayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Picture of the Day';
}
