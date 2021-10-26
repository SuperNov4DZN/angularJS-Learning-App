import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

  produtos: Produtos = {
    name: '',
    price: ''
  }

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
  }

  coletarDadosForm(): void {
    this.produtosService.create(this.produtos).subscribe(() => {
    })
  }
}