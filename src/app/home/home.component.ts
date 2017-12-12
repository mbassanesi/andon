import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

/** tudo que vem antes co constructor são 'variaveis/propriedades */

  n_itens: number; /** declara propriedade (n_itens sendo numero) */
  /** da para passar valor da variavel do arquivo .ts para o .html, ex: o texto que sera exibido no botão */
  
  texto_botao: string = 'Adicionar';
   /** 2 ways data binding = esse valor tanto vai para o html e o html tmb edita */
  d_problema: string = '';
  
  problemas = [];

  constructor() { }

/** tudo que vem depois do constructor são funções/métodos */

  ngOnInit() {
    this.n_itens = this.problemas.length;
  }

  adicionarItem() {
    this.problemas.push(this.d_problema);
    this.d_problema = ''; /** limpa a textbox apos clicar no botão para enviar o problema */
    this.n_itens = this.problemas.length; /** atualiza a variavel "numero de problemas" para ser o tamanho do array de numero de problemas */
  }

  excluirItem(i) {
    this.problemas.splice(i, 1);
  }

}
