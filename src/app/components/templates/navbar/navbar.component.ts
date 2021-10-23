import { Component, OnInit, ViewChildren } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
// import { SidenavService } from 'src/app/side-nav-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  // @ViewChildren('sidenav') public sidenav!: MatSidenav;

  constructor() { } // private sidenavService: SidenavService

  ngOnInit(): void {
  }

  // toggleSideNav() {
  //   this.sidenavService.toggle();
  // }

  data = new Date
  user = 'Administrador'

}
