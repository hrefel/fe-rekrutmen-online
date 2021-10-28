import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { UIModule } from 'src/app/shared';
import { SharedModule } from 'src/app/shared/shared.module';
import * as page from '../';

@NgModule({
  declarations: [page.MasterSoalComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: page.MasterSoalComponent,
      },
    ]),
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [page.MasterSoalComponent],
})
export class MasterSoalModule {}

@NgModule({
  declarations: [page.MasterPertanyaanComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: page.MasterPertanyaanComponent,
      },
    ]),
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [page.MasterPertanyaanComponent],
})
export class MasterPertanyaanModule {}

@NgModule({
  declarations: [page.MasterJawabanComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: page.MasterJawabanComponent,
      },
    ]),
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [page.MasterJawabanComponent],
})
export class MasterJawabanModule {}

