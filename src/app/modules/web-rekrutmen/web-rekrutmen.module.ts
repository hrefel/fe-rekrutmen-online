import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { UIModule } from 'src/app/shared';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebRekrutmenRoutingModule } from './web-rekrutmen-routing.module';
import { WebRekrutmenComponent } from './web-rekrutmen.component';


@NgModule({
  declarations: [WebRekrutmenComponent],
  imports: [
    WebRekrutmenRoutingModule,
    ...UIModule,
    ThemeModule,
    // IvyCarouselModule,
    SharedModule,
  ],
  providers:[],

  bootstrap: [WebRekrutmenComponent],
})
export class WebRekrutmenModule {}