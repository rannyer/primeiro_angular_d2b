import { Component, Input, input, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {

  titulo = "Cadastro de Produtos";
  
  preco = signal(100);

  comDesconto = computed(() => this.preco() * 0.9);

  
  
}
