import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tarefas : Tarefa[] | undefined;
  constructor(private tarefaService : TarefaService,
              private router : Router) { }

  ngOnInit(): void {
    this.tarefas = this.tarefaService.obterTarefas();
  }

  editarTarefa(id : number){
    this.router.navigate(["tarefas", id, "editar"]);
  }

  excluirTarefa(id : number){
    this.tarefaService.excluirTarefa(id);
    this.tarefas = this.tarefaService.obterTarefas();
  }

}
