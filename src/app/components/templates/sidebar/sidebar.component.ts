import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
// import { SidenavService } from 'src/app/side-nav-service';

declare const $: any;
declare interface RouterInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouterInfo[] = [
  {path: '/cadastro', title:'CADASTRO', icon:'add_box', class:''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  // @ViewChild('sidenav') public sidenav!: MatSidenav;
  
  menuItens!: any[];
  
  constructor() { } // private sidenavService: SidenavService

  ngOnInit(): void {
    // this.sidenavService.setNav(this.sidenav);
    this.menuItens = ROUTES.filter(itens => itens);
  }

}
