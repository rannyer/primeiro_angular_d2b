import { Component } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-form-simples',
  styleUrl: './form-simples.css',
  templateUrl: './form-simples.html',
})
export class FormSimples {
  produto: Produto = {
    nome: '',
    categoria: '',
    preco: 0,
    disponivel: false
  };

  cadastar(){
    console.log(this.produto)
    
  }
}
