import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Produto} from '../../entitys/produto/produto';

const httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json; charset=UTF-8"})};

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

    private url="http://127.0.0.1:8000/produtos/";

  constructor(private http:HttpClient) { }

  getProdutos():Observable<Produto[]>{
  return this.http.get<Produto[]>(this.url+"listados/");
  }

}
