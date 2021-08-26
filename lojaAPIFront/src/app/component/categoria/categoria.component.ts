import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../entitys/categoria/categoria'
import {CategoriaService} from '../../service/categoria/categoria.service'
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  novaCategoria:Categoria= new Categoria();
  listaCategorias:Categoria[];


  constructor(private servicoCategoria:CategoriaService,) { }

  ngOnInit(): void {
  this.getCategorias();
  document.getElementById('catEditar').style.display='none';
  }

  prova(){
  alert("NOme da nova categoria:" + this.novaCategoria.nome);
  }

  getCategorias(){
  this.servicoCategoria.getCategorias().subscribe(
  res=>{
  //console.log(res);
  this.listaCategorias=res;
  }
  );
  }
  abrirParEditar(listado:Categoria){

  //this.novaCategoria=listado;
   this.servicoCategoria.getCategoriaId(listado).subscribe(
    res=>{
    this.novaCategoria.id=res[0]['id'];
    this.novaCategoria.nome=res[0]['nome'];
    document.getElementById('catRegistrar').style.display='none';
    document.getElementById('catEditar').style.display='block';
   }
  );
  }

  cancelar(){
  document.getElementById('catEditar').style.display='none';
  document.getElementById('catRegistrar').style.display='block';
  this.novaCategoria = new Categoria();
  }

editar(){
  this.servicoCategoria.editarCategoria(this.novaCategoria).subscribe(
    res=>{
    console.log(res);
    alert("atualizada categoria");
    this.getCategorias();
    document.getElementById('catEditar').style.display='none';
    document.getElementById('catRegistrar').style.display='block';
    },
    error=>{
    console.log(error);
    }
  );
  }

excluir(listado:Categoria){
  var tipo=confirm("Tem certeza que deseja eliminar a categoria" + listado.nome);

  if(tipo){
  //alert("aceito apagar");
    this.servicoCategoria.excluirCategoria(listado.id).subscribe(
      res=>{
        //console.log(res);
        this.getCategorias();
        },
        error=>{console.log(error);
        }
     );
  }
 }

 registrar(){
  this.servicoCategoria.registrarCategoria(this.novaCategoria).subscribe(
  res=>{
    alert("nova categoria registrada");
    this.novaCategoria=new Categoria();
    this.getCategorias();
    },
    error=>{
    console.log(error);
    }
    );
 }
}




