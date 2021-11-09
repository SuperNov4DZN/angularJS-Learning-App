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

  readById(id: string): Observable<Produtos> {
    const url = `${this.baseUrl}/${id}`;
    return this.client.get<Produtos>(url)
  }

  update(produtos: Produtos): Observable<Produtos> {
    const url = `${this.baseUrl}/${produtos.id}`;
    return this.client.put<Produtos>(url, produtos)
  }

  delete(id: string): Observable<Produtos> {
    const url = `${this.baseUrl}/${id}`;
    return this.client.delete<Produtos>(url)
  }
}
