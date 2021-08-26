import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Categoria} from '../../entitys/categoria/categoria';

const httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    private url="http://127.0.0.1:8000/categoria/";

  constructor(private http:HttpClient) { }

  getCategorias():Observable<Categoria[]>{
  return this.http.get<Categoria[]>(this.url+"listados/");
  }

  getCategoriaId(listado:Categoria):Observable<Categoria[]>{
  return this.http.get<Categoria[]>(this.url+listado.id);
  }

  editarCategoria(categoria:Categoria):Observable<Categoria[]>{
  return this.http.put<Categoria[]>(this.url + "editar/" + categoria.id, categoria, httpOptions);
  }

  excluirCategoria(id:number):Observable<Categoria[]>{
  return this.http.delete<Categoria[]>(this.url + "excluir/"+id);
  }
  registrarCategoria(categoria:Categoria):Observable<Categoria[]>{
  return this.http.post<Categoria[]>(this.url + "registrar/", categoria);
  }

}
