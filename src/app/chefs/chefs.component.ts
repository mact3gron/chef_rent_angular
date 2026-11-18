import { Component, inject, signal } from '@angular/core';
import { ChefService } from '../services/chef.service';
import { Chef } from '../models/chef';

@Component({
  imports: [],
  selector: 'app-chefs',
  standalone: true,
  styleUrl: './chefs.component.css',
  templateUrl: './chefs.component.html',
})
export class ChefsComponent {
    private chefService = inject(ChefService);
    chefs = signal<Chef[]>([]);
    loading = signal(true);
    error = signal(false);
    
    constructor() {
      this.chefService.getChefs().subscribe({
        next: (data) => {
          this.chefs.set(data);
          this.loading.set(false);
          console.log('Szakácsok:', data);
          },
          error: (err) => {
            console.error('Hiba a szakácsok lekérésekor:', err);
            this.error.set(true);
            this.loading.set(false);
          }
      });
  }
  berel(chef: Chef) {
  alert(`Kiválasztott szakács: ${chef.name}`);
    }
  }
