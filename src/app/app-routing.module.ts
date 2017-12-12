import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/** importar os componentes */
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  {
    path: '',  /** esse vazio é a pagina inicial */
    component: HomeComponent
  },
  {
    path: 'options',  /** caminho para as opções */
    component: OptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
