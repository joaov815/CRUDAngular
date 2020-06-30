import { Pessoa } from './../lista/pessoa';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

  sexos:any[] = [{
    valor: 'M',
    nome: 'Masculino'
  },{
    valor: 'F',
    nome: 'Feminino'
  },{
    valor: 'P',
    nome: 'Prefiro Não Dizer'
  }];

  formCadastro:FormGroup;

  constructor(
    private pessoaService: PessoaService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      codigo: null,
      nome: [null, Validators.required],
      idade: [null, Validators.required],
      sexo: [null, Validators.required],
      rg: null
    });
  }

  cadastrarPessoa(){
    console.log(this.formCadastro.value);
    this.pessoaService.salvarPessoa(this.formCadastro.value).subscribe(dados => console.log(dados));
    this.formCadastro.reset();
  }

  editarPessoa(){
    this.pessoaService.editarPessoa(this.formCadastro.value).subscribe(dados => console.log(dados));
  }



}
