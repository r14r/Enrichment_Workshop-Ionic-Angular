import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPageRoutingModule } from './routing.module';

import { ConfirmPage } from './page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ConfirmPageRoutingModule],
	declarations: [ConfirmPage],
})
export class ConfirmPageModule {}
