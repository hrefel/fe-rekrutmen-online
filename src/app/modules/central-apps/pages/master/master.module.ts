import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { UIModule } from 'src/app/shared';
import { SharedModule } from 'src/app/shared/shared.module';
import * as page from '../';

@NgModule({
  declarations: [page.MasterLowonganComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: page.MasterLowonganComponent,
      },
    ]),
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [page.MasterLowonganComponent],
})
export class MasterLowonganModule {}

