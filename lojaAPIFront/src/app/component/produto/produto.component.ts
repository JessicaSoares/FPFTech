import { Component, OnInit } from '@angular/core';
import {Produto} from '../../entitys/produto/produto';
import {ProdutoService} from '../../service/produto/produto.service';
import {Categoria} from '../../entitys/categoria/categoria';
import {CategoriaService} from '../../service/categoria/categoria.service';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  novoProduto:Produto= new Produto();
  listaProdutos:Produto[];

  constructor(
  private servicoProduto:ProdutoService) { }

  ngOnInit(): void {
  this.getProdutos();

  }

  prova(){
  alert("NOme do novo produto:" + this.novoProduto.nome);
  }

  getProdutos(){
    this.servicoProduto.getProdutos().subscribe(
    res=>{
    //console.log(res);
    this.listaProdutos=res;
      }
    );
  }

    }





