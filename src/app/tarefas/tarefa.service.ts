import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefas : Tarefa[] = [
    {
      id: 1,
      nome: "Especificar requisitos",
      detalhes: "Especificar requisitos de software",
    },
    {
      id: 2,
      nome: "Codificar componentes",
      detalhes: "Codificar componentes",
      concluido:true
    },
    {
      id: 3,
      nome: "Revisar codigo",
      detalhes: "revisar os codigos implementados",
    }
  ];
  constructor() { }

  obterTarefas() : Tarefa[]{
    return this.tarefas;
  }

  obterTarefa(id : number): Tarefa {
    return this.tarefas.filter( x => x.id === id)[0];
  }

  criarTarefa(tarefa : Tarefa){
    tarefa.id = this.tarefas.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;
    this.tarefas.push(tarefa);
  }

  atualizarTarefa(tarefa : Tarefa){
    const idx = this.tarefas.findIndex( x => x.id === tarefa.id);
    this.tarefas[idx] = tarefa;
  }

  excluirTarefa(id : number){
    this.tarefas = this.tarefas.filter(x => x.id !== id);
  }
}
