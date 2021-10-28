import { NgModule } from '@angular/core';

import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NoAuthGuard } from 'src/app/services/guard/noguard.guard';
import { BankSoalComponent } from './bank-soal.component';
import { PagesRoutes } from './pages/pages.routes';

const routes: Routes = [
  {
    path: 'bank-soal',
    children: [...PagesRoutes],
    canActivate: [NoAuthGuard],
    component:BankSoalComponent,
    data: {
      role: '*',
      title: 'Bank Soal',
      tag: 'login',
      isShowHeader: true,
    },
  },
  
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class BankSoalRoutingModule {}
