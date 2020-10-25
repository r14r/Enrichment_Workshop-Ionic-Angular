import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './routing.module';

import { AboutPage } from './page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, AboutPageRoutingModule],
	declarations: [AboutPage],
})
export class AboutPageModule {}
