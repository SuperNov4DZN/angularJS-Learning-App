import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.sass']
})
export class ProdutosDeleteComponent implements OnInit {
  
  produtos!: Produtos

  constructor(
    private produtosService: ProdutosService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.produtosService.readById(id).subscribe((produtos) =>{
      this.produtos = produtos
    })
  }

  sendDelete(): void {
    confirm('Deseja realmente excluir este produto?') 
    ? this.produtosService.delete(`${this.produtos.id}`).subscribe(() =>{
      this.router.navigateByUrl('produtos')
    }) 
    : '';
  }

  cancelDelete(): void {
    this.router.navigateByUrl('produtos')
  }
}