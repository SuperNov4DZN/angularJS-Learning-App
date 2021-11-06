import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produtos } from '../models/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl = `${environment.baseUrl}produtos`

  constructor(private client: HttpClient) { }

  getData(){
    return this.baseUrl;
  }

  create(produtos: Produtos): Observable<Produtos> {
    return this.client.post<Produtos>(this.baseUrl, produtos)
  }

  read(): Observable<Produtos[]> {
    return this.client.get<Produtos[]>(this.baseUrl)
  }
}
