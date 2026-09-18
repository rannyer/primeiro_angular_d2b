import { Routes } from '@angular/router';
import { ListaProdutos } from './pages/lista-produtos/lista-produtos';
import { Sobre } from './pages/sobre/sobre';
import { Card } from './components/card/card';
import { Container } from './components/container/container';

export const routes: Routes = [
    {path: '', redirectTo: 'produtos', pathMatch: 'full'},
    {path: 'produtos', component: ListaProdutos},
    {path: 'sobre', component: Sobre},
    {path:'**', component: Container }
];
