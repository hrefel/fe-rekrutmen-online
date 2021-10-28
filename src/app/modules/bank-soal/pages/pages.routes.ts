import { Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/services/guard/noguard.guard';

export const PagesRoutes: Routes = [
  {
    path: 'master-soal',
    loadChildren: () =>
      import('./master/master.module').then((m) => m.MasterSoalModule),
    canActivate: [NoAuthGuard],
    data: {
      role: '*',
      title: 'Master Soal',
      tag: '-',
      isShowHeader: true,
    },
  },
  {
    path: 'master-pertanyaan/:idSoal',
    loadChildren: () =>
      import('./master/master.module').then((m) => m.MasterPertanyaanModule),
    canActivate: [NoAuthGuard],
    data: {
      role: '*',
      title: 'Master Pertanyaan',
      tag: '-',
      isShowHeader: true,
    },
  },
  {
    path: 'master-jawaban',
    loadChildren: () =>
      import('./master/master.module').then((m) => m.MasterJawabanModule),
    canActivate: [NoAuthGuard],
    data: {
      role: '*',
      title: 'Master Jawaban',
      tag: '-',
      isShowHeader: true,
    },
  },
];
