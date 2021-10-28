import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { UIModule } from 'src/app/shared';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankSoalRoutingModule } from './bank-soal-routing.module';
import { BankSoalComponent } from './bank-soal.component';

@NgModule({
  declarations: [BankSoalComponent],
  imports: [
    BankSoalRoutingModule,
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [BankSoalComponent],
})
export class BankSoalModule {}