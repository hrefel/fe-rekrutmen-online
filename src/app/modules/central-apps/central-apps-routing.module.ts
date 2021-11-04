import { NgModule } from '@angular/core';

import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NoAuthGuard } from 'src/app/services/guard/noguard.guard';
import { CentralAppsComponent } from './central-apps.component';

const routes: Routes = [
  {
    path: 'central-app',
    children: [],
    canActivate: [NoAuthGuard],
    component:CentralAppsComponent,
    data: {
      role: 'superadmin',
      title: 'Central Application',
      tag: 'central',
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
export class CentralAppsRoutingModule {}
