import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {
    path: 'busca-cep', loadComponent: () => loadRemoteModule('busca-cep', './BuscaCepComponent')
    .then((b) => b.BuscaCepComponent)
  },
  {
    path: 'busca-feriado', loadComponent: () => loadRemoteModule('busca-feriado', './BuscaFeriadoComponent')
    .then((b) => b.BuscaFeriadoComponent)
  }
];
