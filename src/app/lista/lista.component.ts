import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaPessoas:Pessoa[] = [];

  constructor(private pessoaService:PessoaService) { }

  ngOnInit() {
    this.loadPessoas();
  }

  loadPessoas(){
    this.listaPessoas = [];
    this.pessoaService.getListaPessoas().subscribe(dados => {
      this.listaPessoas = dados
      for(let i = 0; i < this.listaPessoas.length; i++){
        console.log(this.listaPessoas[i]);
      }
    });
  }

  excluirCadastro(pessoaCodigo:number){
    this.pessoaService.excluirPessoa(pessoaCodigo).subscribe(() => this.loadPessoas());
  }

}
