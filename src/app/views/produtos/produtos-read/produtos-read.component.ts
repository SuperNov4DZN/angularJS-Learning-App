import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ProdutosReadDataSource } from './produtos-read-datasource';

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.sass']
})
export class ProdutosReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Produtos[]>;
  // dataSource: ProdutosReadDataSource;

  produtos!: Produtos[];
  title = 'Produtos'
  subtitle = 'Listagem de produtos em estoque'

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  constructor(private router:Router, private produtosService: ProdutosService) {
    // this.dataSource = new ProdutosReadDataSource();
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;

    this.produtosService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  incluirProduto(): void {
    this.router.navigateByUrl('cadastro') // TODO: REFACTOR CODE, REMOVE CADASTRO | ADD PRODUTO-ADD,REMOVE,CREATE AND TABLE STRUCTURE
  }
}
