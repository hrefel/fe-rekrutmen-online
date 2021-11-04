import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { UIModule } from 'src/app/shared';
import { SharedModule } from 'src/app/shared/shared.module';
import * as page from './';

@NgModule({
  declarations: [page.BerandaWebComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: page.BerandaWebComponent,
      },
    ]),
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [page.BerandaWebComponent],
})
export class BerandaWebModule {}

@NgModule({
  declarations: [page.LowonganComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: page.LowonganComponent,
      },
    ]),
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [page.LowonganComponent],
})
export class LowonganModule {}