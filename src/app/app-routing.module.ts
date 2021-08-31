import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'feed-modal',
    loadChildren: () => import('./feed-modal/feed-modal.module').then( m => m.FeedModalPageModule)
  },
  {
    path: 'feed/:id',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'atraso-modal',
    loadChildren: () => import('./modal/atraso-modal/atraso-modal.module').then( m => m.AtrasoModalPageModule)
  },
  {
    path: 'extra-modal',
    loadChildren: () => import('./modal/extra-modal/extra-modal.module').then( m => m.ExtraModalPageModule)
  },
  {
    path: 'falta-modal',
    loadChildren: () => import('./modal/falta-modal/falta-modal.module').then( m => m.FaltaModalPageModule)
  },
  {
    path: 'ferias-modal',
    loadChildren: () => import('./modal/ferias-modal/ferias-modal.module').then( m => m.FeriasModalPageModule)
  },
  {
    path: 'comunicado-modal',
    loadChildren: () => import('./modal/comunicado-modal/comunicado-modal.module').then( m => m.ComunicadoModalPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./modal/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'justificativas/:id',
    loadChildren: () => import('./justificativas/justificativas.module').then( m => m.JustificativasPageModule)
  },
  {
    path: 'tratativa',
    loadChildren: () => import('./modal/tratativa/tratativa.module').then( m => m.TratativaPageModule)
  },
  {
    path: 'concluidos/:id',
    loadChildren: () => import('./concluidos/concluidos.module').then( m => m.ConcluidosPageModule)
  },
  {
    path: 'funcionarios/:id',
    loadChildren: () => import('./funcionarios/funcionarios.module').then( m => m.FuncionariosPageModule)
  },
  {
    path: 'funcionario-modal',
    loadChildren: () => import('./modal/funcionario-modal/funcionario-modal.module').then( m => m.FuncionarioModalPageModule)
  },
  {
    path: 'foto',
    loadChildren: () => import('./modal/foto/foto.module').then( m => m.FotoPageModule)
  },
  {
    path: 'view-funcionarios-modal',
    loadChildren: () => import('./modal/view-funcionarios-modal/view-funcionarios-modal.module').then( m => m.ViewFuncionariosModalPageModule)
  },
  {
    path: 'navegador',
    loadChildren: () => import('./arquivo/navegador/navegador.module').then( m => m.NavegadorPageModule)
  },

  {
    path: 'seguranca/:id',
    loadChildren: () => import('./seguranca/seguranca.module').then( m => m.SegurancaPageModule)
  },
  {
    path: 'ficha',
    loadChildren: () => import('./modal/ficha/ficha.module').then( m => m.FichaPageModule)
  },
  {
    path: 'lancamentos',
    loadChildren: () => import('./lancamentos/lancamentos/lancamentos.module').then( m => m.LancamentosPageModule)
  },
  {
    path: 'pagamentos',
    loadChildren: () => import('./lancamentos/pagamentos/pagamentos.module').then( m => m.PagamentosPageModule)
  },
  {
    path: 'ponto',
    loadChildren: () => import('./lancamentos/ponto/ponto.module').then( m => m.PontoPageModule)
  },
  {
    path: 'ferias',
    loadChildren: () => import('./lancamentos/ferias/ferias.module').then( m => m.FeriasPageModule)
  },
  {
    path: 'ponto-lote',
    loadChildren: () => import('./lancamentos/ponto-lote/ponto-lote.module').then( m => m.PontoLotePageModule)
  },
  {
    path: 'Pagamentos-lote',
    loadChildren: () => import('./lancamentos/pagamentos-lote/pagamentos-lote.module').then( m => m.PagamentosLotePageModule)
  },
  {
    path: 'turno',
    loadChildren: () => import('./modal/turno/turno.module').then( m => m.TurnoPageModule)
  },
  {
    path: 'advertencia',
    loadChildren: () => import('./modal/advertencia/advertencia.module').then( m => m.AdvertenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
