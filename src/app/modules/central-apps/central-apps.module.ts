import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralAppsComponent } from './central-apps.component';
import { UIModule } from 'src/app/shared';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CentralAppsRoutingModule } from './central-apps-routing.module';


@NgModule({
  declarations: [CentralAppsComponent],
  imports: [
    CentralAppsRoutingModule,
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],
  providers:[],

  bootstrap: [CentralAppsComponent],
})
export class CentralAppsModule { }
