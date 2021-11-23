import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tarefaForm = this.formBuilder.group({
    nome: '',
    detalhes: '',
    concluido: false
  });

  constructor(private tarefaService : TarefaService, 
              private formBuilder: FormBuilder,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?.toString();
    const tarefa = this.tarefaService.obterTarefa(parseInt(id??''))
    this.tarefaForm = this.formBuilder.group(
      {
        id: tarefa.id,
        nome: tarefa.nome,
        detalhes: tarefa.detalhes,
        concluido: tarefa.concluido ? tarefa.concluido : false
      }
    );
  }

  salvarTarefa(){
    const tarefa : Tarefa = this.tarefaForm.value
    if(tarefa.id)
      this.tarefaService.atualizarTarefa(tarefa);
    else
      this.tarefaService.criarTarefa(tarefa);

    this.tarefaForm.reset();
    this.router.navigateByUrl("/tarefas");
  }

}
