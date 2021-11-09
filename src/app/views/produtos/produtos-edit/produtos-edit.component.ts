import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-edit',
  templateUrl: './produtos-edit.component.html',
  styleUrls: ['./produtos-edit.component.sass']
})
export class ProdutosEditComponent implements OnInit {

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

  sendEdit(): void {
    this.produtosService.update(this.produtos).subscribe(() =>{
      alert('Produto alterado!')
      this.router.navigateByUrl('produtos')
    })
  }

  cancelEdit(): void {
    this.router.navigateByUrl('produtos')
  }
}
