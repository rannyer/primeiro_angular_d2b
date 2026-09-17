import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Produto } from '../../models/produto.model';
@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-com-ngform',
  styleUrl: './form-com-ngform.css',
  templateUrl: './form-com-ngform.html',
})
export class FormComNgform implements OnInit{
  private fb = inject(FormBuilder)
  listaCategorias = ['']
  form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    preco: [null , [Validators.required, Validators.min(0.01)]],
    categoria: ['', [Validators.required, Validators.minLength(3)]],
    disponivel: [true]
  })
  ngOnInit(): void {
    this.getCategorias()
  }

  salvar(){
    const produto = this.form.getRawValue();
    console.log(produto)

  }

  getCategorias(){
  this.listaCategorias = ['informatica', 'moveis', 'limpeza']
  }

}
