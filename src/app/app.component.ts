import { Component, signal } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ChefsComponent } from './chefs/chefs.component';

@Component({
  imports: [NavbarComponent, ChefsComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('chef-rent');
}
