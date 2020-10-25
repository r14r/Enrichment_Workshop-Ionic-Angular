import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkingWithServicesPageRoutingModule } from './routing.module';
import { WorkingWithServicesPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		WorkingWithServicesPageRoutingModule,
	],
	declarations: [WorkingWithServicesPage],
})
export class WorkingWithServicesPageModule {}
