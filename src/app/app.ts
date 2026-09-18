import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormSimples } from './formularios/form-simples/form-simples';
import { FormComNgform } from './formularios/form-com-ngform/form-com-ngform';
import { FormComSignal } from './formularios/form-com-signal/form-com-signal';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Rodape } from './components/rodape/rodape';
import { Cabecalho } from './components/cabecalho/cabecalho';

interface Planta {
  id: number;
  nome: string;
  nomeCientifico: string;
  preco: number;
  imagem: string;
  descricao: string;
  nivelCuidado: 'fácil' | 'médio' | 'difícil';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormSimples,
    FormComNgform,
    FormComSignal,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Rodape,
    Cabecalho
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  plantas: Planta[] = [
    {
      id: 1,
      nome: 'Monstera Deliciosa',
      nomeCientifico: 'Monstera deliciosa',
      preco: 89.9,
      imagem: 'assets/plant1.jpg',
      descricao: 'Folhas grandes e marcantes que iluminam qualquer canto da casa.',
      nivelCuidado: 'fácil',
    },
    {
      id: 2,
      nome: 'Zamioculca',
      nomeCientifico: 'Zamioculcas zamiifolia',
      preco: 74.5,
      imagem: 'assets/plant2.jpg',
      descricao: 'Resiste bem à rotina e traz um verde exuberante com pouco esforço.',
      nivelCuidado: 'médio',
    },
    {
      id: 3,
      nome: 'Espada-de-São-Jorge',
      nomeCientifico: 'Sansevieria trifasciata',
      preco: 99.0,
      imagem: 'assets/plant3.jpg',
      descricao: 'Perfeita para ambientes com pouca luz e manutenção bem simples.',
      nivelCuidado: 'fácil',
    },
  ];
}
