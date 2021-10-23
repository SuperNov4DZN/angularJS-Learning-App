import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
    providedIn: 'root'
})
export class SidenavService {
    private sidenav!: MatSidenav;

    setNav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }
    
    toggle(): void {
        this.sidenav.toggle();
    }
}