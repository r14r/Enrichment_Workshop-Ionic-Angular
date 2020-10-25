import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './routing.module';
import { HomePage } from './page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	entryComponents: [],
	declarations: [HomePage],
})
export class HomePageModule {}
