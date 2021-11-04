import { Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/services/guard/noguard.guard';

export const PagesRoutes: Routes = [
  {
    path: '', redirectTo: 'web/beranda', pathMatch: 'full'
  },
  {
    path: 'beranda',
    loadChildren: () =>
      import('./pages-web-rekrutmen.module').then((m) => m.BerandaWebModule),
    canActivate: [NoAuthGuard],
    data: {
      role: '*',
      title: 'Beranda',
      tag: '-',
      isShowHeader: true,
    },
  }, {
    path: 'lowongan',
    loadChildren: () =>
      import('./pages-web-rekrutmen.module').then((m) => m.LowonganModule),
    canActivate: [NoAuthGuard],
    data: {
      role: '*',
      title: 'Lowongan',
      tag: '-',
      isShowHeader: true,
    },
  }
];
