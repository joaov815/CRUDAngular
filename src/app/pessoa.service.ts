import { Pessoa } from './lista/pessoa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private readonly API = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }
  
  getListaPessoas(){
    return this.http.get<Pessoa[]>(`${this.API}pessoa`).pipe(tap(console.log));
  }

  salvarPessoa(pessoa:Pessoa){
    return this.http.post<Pessoa>(`${this.API}pessoa`, pessoa).pipe(take(1));
  }

  editarPessoa(pessoa:Pessoa){
    return this.http.put<Pessoa>(`${this.API}pessoa`, pessoa).pipe(take(1));
  }
  
  excluirPessoa(codigoPessoa:number){
    return this.http.delete(`${this.API}pessoa/${codigoPessoa}`).pipe(take(1));
  }
}