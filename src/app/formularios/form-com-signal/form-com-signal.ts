import { Component, signal } from '@angular/core';
import { form, FormField, min, minLength, required, FormRoot } from '@angular/forms/signals';
import { Produto } from '../../models/produto.model';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-form-com-signal',
  styleUrl: './form-com-signal.css',
  templateUrl: './form-com-signal.html',
})
export class FormComSignal {
  dados = signal<Produto>({
    nome: '',
    preco: 0,
    categoria : '',
    disponivel: true
  })

  produtoForm = form(this.dados, (campo) => {
    required(campo.nome),
    minLength(campo.nome, 3),
    min(campo.preco, 0.01),
    required(campo.categoria)
  })

  salvar(){
    console.log(this.dados())
    this.limpar()
  }
  limpar(){
    this.dados.set({
    nome: '',
    preco: 0,
    categoria : '',
    disponivel: true
  })
  
  }


}
