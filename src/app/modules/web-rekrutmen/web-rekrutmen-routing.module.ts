import { NgModule } from '@angular/core';

import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NoAuthGuard } from 'src/app/services/guard/noguard.guard';
import { PagesRoutes } from './pages/pages.routes';
import { WebRekrutmenComponent } from './web-rekrutmen.component';

const routes: Routes = [
  {
    path: 'web',
    children: [...PagesRoutes],
    canActivate: [NoAuthGuard],
    component:WebRekrutmenComponent,
    data: {
      role: '*',
      title: 'Web Rekrutmen',
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
export class WebRekrutmenRoutingModule {}
