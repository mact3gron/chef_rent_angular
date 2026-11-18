import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chef } from '../models/chef';

@Injectable({
    providedIn: 'root',
    })
    export class ChefService {

        private http = inject(HttpClient);
        private url = 'https://chat-4b282-default-rtdb.europe-west1.firebasedatabase.app/chefs.json';

        getChefs() {
            return this.http.get<Chef[]>(this.url);
        }
    
    }