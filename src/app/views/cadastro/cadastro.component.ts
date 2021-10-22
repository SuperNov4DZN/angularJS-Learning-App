import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coletarDadosForm() {

    const name = (<HTMLInputElement>document.getElementById('idName')).value
    const nMae = (<HTMLInputElement>document.getElementById('idNmae')).value
    const dtNasc = (<HTMLInputElement>document.getElementById('idDtnasc')).value

  }

}
