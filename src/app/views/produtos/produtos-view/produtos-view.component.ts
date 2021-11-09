import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-view',
  templateUrl: './produtos-view.component.html',
  styleUrls: ['./produtos-view.component.sass']
})
export class ProdutosViewComponent implements OnInit {

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

  cancel(): void {
    this.router.navigateByUrl('produtos')
  }
}